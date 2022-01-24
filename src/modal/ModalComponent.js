import React from "react";
// import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import ButtonGroup from "@mui/material/ButtonGroup";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import {
  Autocomplete,
  FormControl,
  FormHelperText,
  InputAdornment,
  TextField,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { DeveloperBoardOff } from "@mui/icons-material";

function ModalComponent() {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 600,
    bgcolor: "background.paper",
    boxShadow: 24,
    p: 0,
    border: "radious",
  };

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const exampList = ["abc", "def", "ghi", "jkl"];
  return (
    <div>
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        disableEnforceFocus={true}
        disableAutoFocus
      >
        <Box
          component="form"
          // sx={{
          //   "& .MuiTextField-root": { width: "auto" },
          // }}
          noValidate
          autoComplete="off"
          sx={style}
          style={{ borderRadius: "5px" }}
        >
          <div className="row m-2 ">
            <div className="col-10 ">
              <h6 className="modal-title">Create Blog</h6>
            </div>
            <div className="col-2 ">
              <CloseIcon onClick={handleClose} />
            </div>
          </div>
          <hr />
          <FormControl sx={{ m: 1 }} variant="outlined">
            <div className="container">
              <div className="row">
                <div className="col-6 containdr">
                  <TextField
                    id="standard-error-helper-text"
                    label="Blog Header"
                    placeholder="Enter Blog Header"
                    defaultValue="Enter Blog Headder"
                    // helperText="Blog Headder Reaquired."
                    variant="standard"
                  />
                </div>
                <div className="col-6">
                  <Autocomplete
                    id="size-small-standard"
                    label="Catagory"
                    size="small"
                    options={exampList}
                    getOptionLabel={(option) => option}
                    defaultValue="select blog catagory"
                    helperText="Blog catagory."
                    renderInput={(params) => (
                      <TextField
                        {...params}
                        variant="standard"
                        label="Catagory"
                        placeholder="Select blog catagory"
                      />
                    )}
                  />
                </div>
              </div>

              <br />
              <TextField
                className="col-12"
                id="size-large"
                label="short discription "
                defaultValue="short discription goes here"
                variant="standard"
              />
              <FormHelperText style={{ float: "right" }} id="float-left">
                0/200
              </FormHelperText>
              <br />
            </div>
            <p className="container">Body</p>
            <textarea
              className="form-control shadow-none textarea_contact"
              name="message"
              cols="80"
              rows="10"
              title="Body"
              placeholder="Body for the blog goes here"
              // defaultValue="Body for the blog goes here"
              variant="standard"
              maxLength="500"
            ></textarea>
            <br />
            <div className="d-flex text-primary">
              <AttachFileIcon />
              <label className="text-primary" for="upload-photo">
                Add Image
              </label>
              <input
                type="file"
                style={{ opacity: "0", position: "absolute", zIndex: "-1" }}
                id="upload-photo"
              />
            </div>
          </FormControl>
          <hr />
          <ButtonGroup
            className="d-flex container m-2"
            style={{ alignContent: "center" }}
          >
            <button type="button" class="btn btn-secondary btn-sm">
              Sava & Not Publish
            </button>
            <button type="button" class="btn btn-secondary btn-sm cl-2px">
              Preview
            </button>
            <button type="button" class="btn btn-secondary btn-sm">
              Rest
            </button>
            <button type="button" class="btn btn-secondary btn-sm">
              Cancel
            </button>
            <button type="button" class="btn btn-primary btn-sm">
              Publish
            </button>
          </ButtonGroup>
        </Box>
      </Modal>
    </div>
  );
}
// }

export default ModalComponent;
