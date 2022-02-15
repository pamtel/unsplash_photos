import React, { useState, useEffect } from "react";
import debounce from "lodash.debounce";
import "./App.scss";
import axios from "axios";
import Loader from "./components/Loader";
import SearchInput from "./components/SearchInput";
import PictureList from "./components/PictureList";

const App = () => {
  const clientId = process.env.REACT_APP_ACCESS_KEY;
  const [image, setImage] = useState("");
  const [searchImage, setSearchImage] = useState(false);
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = () => {
    setIsLoading(true);
    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      image +
      "&client_id=" +
      clientId;
    axios.get(url).then((response) => {
      setResult(response.data.results);
      setSearchImage(true);
      setIsLoading(false);
    });
  };

  const apiDoc = () => {
    setIsLoading(true);
    const url = `https://api.unsplash.com/photos/?client_id=${clientId}&&limit=50`;
    axios.get(url).then((response) => {
      setResult(response?.data);
      setIsLoading(false);
    });
  };

  useEffect(() => {
    apiDoc();
  }, []);

  const handleChange = (event) => {
    setImage(event.target.value);
    const debounceSearch = debounce(() => handleSubmit(), 1300);
    debounceSearch();
  };

  return (
    <div className="app">
      <div className="header">
        <SearchInput handleChange={handleChange} image={image} />
        <p>
          Search Result for <strong>{image}</strong>
        </p>
      </div>
      <div className="result">
          <PictureList pictures={result} />
        {Array(6)
          .fill({})
          .map((_, idx) => (
            <div key={idx} className='loader'>{isLoading && <Loader />}</div>
          ))}
      </div>
    </div>
  );
};

export default App;
