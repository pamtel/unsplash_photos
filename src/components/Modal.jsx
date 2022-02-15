import * as React from "react";
import { styled, Box } from "@mui/system";
import ModalUnstyled from "@mui/base/ModalUnstyled";

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled("div")`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: "#fff",
  pb: 3,
};

export default function ModalUnstyledDemo({ open, setOpen, image }) {
  const handleClose = () => setOpen(false);
  const handleOpen = () => setOpen(true);
  return (
    <div onClick={handleOpen}>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={handleClose}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <img src={image.urls.full} alt="pics" className="modal-image" />
          <h3 className="modal-name">{image.user.name}</h3>
          <p className="modal-location">{image.user.location}</p>
        </Box>
      </StyledModal>
    </div>
  );
}
