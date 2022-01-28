import {
  Autocomplete,
  Button,
  FormControl,
  FormHelperText,
  TextField,
} from "@mui/material";
import ModalComponent from "./ModalComponent";
import parse from "html-react-parser";
import AttachFileIcon from "@mui/icons-material/AttachFile";
import { useState } from "react";
import DecoupledEditor from "@ckeditor/ckeditor5-build-decoupled-document";
import { CKEditor } from "@ckeditor/ckeditor5-react";

function ModalContent() {
  const [text, setText] = useState("");
  const [val, setval] = useState();
  const [body, setBody] = useState(0);
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
  const handlePreview = () => {
    let id = Math.floor(Math.random() * Math.random() * 10201020);
    let content = [];
    content.push(val);
    // console.log(content);
    const result = content.reduce(
      (acc, x) => {
        let obj = {};
        obj[id] = x;
        acc.content.push(obj);
        return acc;
      },
      {
        content: [],
      }
    );
    console.log(JSON.stringify(result));
  };
  const handlePublish = () => {
    const errorObj = handleError();
    setError(errorObj);
  };
  const handleChange = (e, editor) => {
    const data = editor.getData();
    setDefaultFormData({ ...defaultFormData, body: data });
    setval(data);
  };

  return (
    <>
      <Button onClick={handleOpen}>Open modal</Button>

      <ModalComponent
        open={open}
        handlePreview={handlePreview}
        handleClose={handleClose}
        handlePublish={handlePublish}
      >
        <FormControl style={{ width: "100%" }} className="px-3">
          <div className="">
            <div className="row">
              <div className="col-6 containdr">
                <p className="mb-0">
                  Blog Header<span className="text-danger">*</span>
                </p>
                <TextField
                  required
                  id="standard-error-helper-text"
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
                  <p className="mb-0" style={{ color: "red" }}>
                    Blog header required
                  </p>
                )}
              </div>
              <div className="col-6">
                <p className="mb-0">
                  Catagory<span className="text-danger">*</span>
                </p>
                <Autocomplete
                  required
                  onSelect={(e) => {
                    setDefaultFormData({
                      ...defaultFormData,
                      category: e.target.value,
                    });
                  }}
                  id="size-small-standard"
                  size="small"
                  options={exampList}
                  getOptionLabel={(option) => option}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      onChange={(e) => console.log(e.target.value)}
                      required
                      variant="standard"
                      placeholder="Select blog catagory"
                    />
                  )}
                />
                <p className="mb-0 text-primary">Add Category</p>
                {error.category && (
                  <p className="mb-0" style={{ color: "red" }}>
                    Category is required
                  </p>
                )}
              </div>
            </div>
          </div>
          <div className="my-3">
            <p className="mb-0">Short Discription</p>
            <TextField
              inputProps={{ maxLength: 200 }}
              id="size-large"
              placeholder="Short Discription"
              variant="standard"
              className="col-12"
              onChange={(e) => {
                const shortDiscription = e.target.value;
                setBody(shortDiscription.length);
              }}
            />

            <FormHelperText style={{ float: "right" }} id="float-left">
              <span>{body}/200</span>
            </FormHelperText>
            <br />
          </div>
          <p className="mb-0">Body</p>
          <div>
            <div
              style={
                error.body
                  ? { border: "1px solid red" }
                  : { border: "1px solid gray" }
              }
              className="editor"
            ></div>
            <CKEditor
              editor={DecoupledEditor}
              data={defaultFormData.body}
              onChange={handleChange}
              onReady={(editor) => {
                window.editor = editor;
                const toolbarComponent = document.querySelector(".editor");
                toolbarComponent.appendChild(editor.ui.view.toolbar.element);
                editor.ui
                  .getEditableElement()
                  .parentElement.append(editor.ui.view.toolbar.element);
              }}
              // config={{
              //   plugins: [
              //     "Essentials",
              //     "FontFamily",
              //     "FontSize",
              //     "FontColor",
              //     "FontBackgroundColor",
              //     "Alignment",
              //     "Bold",
              //     "Italic",
              //     "Strikethrough",
              //     "Underline",
              //     "BlockQuote",
              //   ],
              // }}
            />
          </div>
          {/* <textarea
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
          ></textarea> */}
          {error.body && (
            <p className="mb-0" style={{ color: "red" }}>
              Blog header required
            </p>
          )}

          <div className="my-2">
            <p
              // style={
              //   error.image
              //     ? { color: "red" }
              //     : { color: "gray" }
              // }
              className={error.image ? "text-danger mb-0" : "mb-0"}
            >
              Add Image<span className="text-danger">*</span>
            </p>
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
          </div>
          {error.hedder && (
            <p className="mb-0" style={{ color: "red" }}>
              Image is required
            </p>
          )}
        </FormControl>
      </ModalComponent>
    </>
  );
}

export default ModalContent;
