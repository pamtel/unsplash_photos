import React, { useState } from "react";
import Modal from "./Modal";
import styled from "styled-components";

const Card = styled.div`
  display: flex;
  justify-content: center;
  cursor: pointer;

  height: auto;
  overflow: hidden;
  // min-height: 100%;
  // max-height: 300px;
  margin: 0 0.5rem 13px 0.5rem;
  position: relative;
`;

const Picture = ({ image }) => {
  const [open, setOpen] = useState(false);

  return (
    <Card key={image.id} onClick={() => setOpen(true)}>
      <img src={image.urls.thumb} alt="pics" />
      <div className="card-content">
        <p className="card-username">{image.user.name}</p>
        <p className="card-location">{image.user.location}</p>
      </div>
      <Modal open={open} setOpen={setOpen} image={image} />
    </Card>
  );
};

export default Picture;
