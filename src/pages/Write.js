import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  return (
    <div>
      <MyComponent />
    </div>
  );
}

function MyComponent() {
  const [value, setValue] = useState("");

  return (
    <ReactQuill
      theme="snow"
      style={{ height: "600px" }}
      value={value}
      onChange={setValue}
    />
  );
}

export default Write;
