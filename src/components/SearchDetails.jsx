import React from "react";
import Card from "./Card";

const SearchDetails = ({ searchResult }) => {
  return (
    <div>
      <div className="result">
        {searchResult && searchResult.map((image) => (
          <Card image={image} />
        ))}
      </div>
    </div>
  );
};

export default SearchDetails;
