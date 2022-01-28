import React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import CloseIcon from "@mui/icons-material/Close";
import PropTypes from "prop-types";

const ModalComponent = ({
  children,
  open,
  handleClose,
  handleSavaAndNotPublish,
  handlePreview,
  handleRest,
  handlePublish,
}) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 800,
    bgcolor: "background.paper",
    boxShadow: 10,
    border: "radious",
  };

  // const [open, setOpen] = React.useState(false);
  // const handleOpen = () => setOpen(true);
  // const handleClose = () => setOpen(false);

  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        // handlepublish={handlePublish}
        disableEnforceFocus={true}
        disableAutoFocus
        onBackdropClick
      >
        <Box
          component="form"
          noValidate
          autoComplete="off"
          sx={style}
          style={{ borderRadius: "5px" }}
        >
          <div className="row m-2 ">
            <div className="col-11 ">
              <h6 className="modal-title">Create Blog</h6>
            </div>
            <div className="col-1 d-flex justify-content-end">
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
          <hr />
          <div>{children}</div>
          <hr />
          <div className="d-flex justify-content-end m-2">
            <button type="button" className="btn btn-secondary btn-sm">
              Sava & Not Publish
            </button>
            <button
              onClick={handlePreview}
              type="button"
              className="btn btn-secondary btn-sm mx-2"
            >
              Preview
            </button>
            <button type="button" className="btn btn-secondary btn-sm mx-2">
              Rest
            </button>
            <button type="button" className="btn btn-secondary btn-sm mx-2">
              Cancel
            </button>
            <button
              type="button"
              onClick={handlePublish}
              className="btn btn-primary btn-sm mx-2"
            >
              Publish
            </button>
          </div>
        </Box>
      </Modal>
    </div>
  );
};
// }

ModalComponent.prototypes = {
  children: PropTypes.element.isRequired,
};

export default ModalComponent;
