import React from "react";
import Modal from "./Modal";

const Card = ({ image, open, setOpen }) => {
  const handleClose = () => setOpen(false);
  return (
    <div className="card" key={image.id} onClick={() => setOpen(true)}>
      <img src={image.urls.thumb} alt="pics" />
      <p className="username">{image.user.name}</p>
      <p className="location">{image.user.location}</p>
      <Modal open={open} onClose={handleClose} />
    </div>
  );
};

export default Card;
