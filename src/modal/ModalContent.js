import {
  Autocomplete,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import ModalComponent from "./ModalComponent";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useState } from "react";
import { border, style } from "@mui/system";

function ModalContent() {
  // const [validated, setValidated] = useState(false);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState({
    hedder: false,
    category: false,
    body: false,
    image: false,
  });
  const [defaultFormData, setDefaultFormData] = useState({
    hedder: "",
    category: "",
    body: "",
    image: "",
  });

  const exampList = [
    "Product",
    "Technology",
    "Web Design",
    "Coading",
    "Testing",
    "Metaverse",
    "Social Media",
    "Automation",
    "AI",
  ];
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
    setError({
      hedder: false,
      category: false,
      body: false,
      image: false,
    });
  };

  const handleError = () => {
    const { hedder, category, body, image } = defaultFormData;

    let errorObj = {
      hedder: false,
      category: false,
      body: false,
      image: false,
    };
    if (hedder === "") {
      errorObj.hedder = true;
    }
    if (category === "") {
      errorObj.category = true;
    }
    if (body === "") {
      errorObj.body = true;
    }
    if (image === "") {
      errorObj.image = true;
    }
    return errorObj;
  };

  const handlePublish = () => {
    const errorObj = handleError();
    setError(errorObj);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>

      <ModalComponent
        open={open}
        handleClose={handleClose}
        handlePublish={handlePublish}
      >
        <FormControl style={{ width: "100%" }} className="px-3">
          <div className="">
            <div className="row">
              <div className="col-6 containdr">
                <TextField
                  required
                  id="standard-error-helper-text"
                  label="Blog Header"
                  placeholder="Enter Blog Header"
                  variant="standard"
                  onChange={(e) => {
                    setDefaultFormData({
                      ...defaultFormData,
                      hedder: e.target.value,
                    });
                  }}
                />
                {error.hedder && (
                  <p style={{ color: "red" }}>Blog header required</p>
                )}
              </div>
              <div className="col-6">
                <Autocomplete
                  required
                  onSelect={(e) => {
                    setDefaultFormData({
                      ...defaultFormData,
                      hedder: e.target.value,
                    });
                  }}
                  id="size-small-standard"
                  label="Catagory"
                  size="small"
                  options={exampList}
                  getOptionLabel={(option) => option}
                  defaultValue="select blog catagory"
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      // label={value.length === 0 ? title : title + " *"} //handle required mark(*) on label
                      // required={value.length === 0}
                      onChange={(e) => console.log(e.target.value)}
                      required
                      variant="standard"
                      label="Catagory"
                      placeholder="Select blog catagory"
                    />
                  )}
                />
                {error.category && (
                  <p style={{ color: "red" }}>Category is required</p>
                )}
              </div>
            </div>
          </div>
          <div>
            <br />
            <TextField
              className="col-12"
              id="size-large"
              label="short discription "
              // onChange={(e) => {
              //   setBody(e.target.value);
              // }}
              variant="standard"
            />
            <FormHelperText style={{ float: "right" }} id="float-left">
              0/200
            </FormHelperText>
            <br />
          </div>
          <p className="mb-0">Body</p>
          <textarea
            onChange={(e) => {
              setDefaultFormData({
                ...defaultFormData,
                category: e.target.value,
              });
              console.log(e.target.value);
            }}
            style={{ padding: "2px" }}
            className="form-control shadow-none"
            name="message"
            cols="56"
            rows="10"
            title="Body"
            placeholder="Body for the blog goes here"
            variant="standard"
            maxLength="500"
            style={
              error.body
                ? { border: "1px solid red" }
                : { border: "1px solid gray" }
            }
          ></textarea>
          {error.body && <p style={{ color: "red" }}>Blog header required</p>}
          <br />
          <div className="d-flex text-primary">
            <AttachFileIcon />
            <label className="text-primary" htmlFor="upload-photo">
              Add Image
            </label>
            <input
              required
              type="file"
              style={{ opacity: "0", position: "absolute", zIndex: "-1" }}
              id="upload-photo"
              onChange={(e) => {
                setDefaultFormData({
                  ...defaultFormData,
                  image: e.target.value,
                });
                console.log(e.target.value);
              }}
            />
          </div>
          {error.hedder && <p style={{ color: "red" }}>Image is required</p>}
        </FormControl>
      </ModalComponent>
    </>
  );
}

export default ModalContent;
