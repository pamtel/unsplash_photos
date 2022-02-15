import React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

// const style = {
//   position: "absolute",
//   top: "50%",
//   left: "50%",
//   transform: "translate(-50%, -50%)",
//   width: '100%',
//   bgcolor: "background.paper",
//   border: "2px solid #000",
//   boxShadow: 24,
//   p: 4,
// };

const Modal = ({ open, image }) => {
  return (
    <>
    {open && <div>
      <img src={image.urls.thumb} alt="pics" />
      <p className="username">{image.user.name}</p>
      <p className="location">{image.user.location}</p>
    </div>
    }
    </>
  );
};

export default Modal;
