import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

function Write() {
  return (
    <div>
      <div>
        글작성용 상단바
        <button
          class="button"
          aria-busy="false"
          role="button"
          tabindex="0"
          aria-pressed="false"
          type="button"
        >
          <div class="buttontext">저장</div>
        </button>
        <button
          class="button"
          aria-busy="false"
          role="button"
          tabindex="0"
          aria-pressed="false"
          type="button"
        >
          <div class="buttontext">게시</div>
        </button>
      </div>
      <input
        class="title1"
        maxlength="100"
        placeholder="제목을 입력하세요"
        type="text"
      ></input>
      <input
        class="title2"
        maxlength="100"
        placeholder="부제목을 입력하세요"
        type="text"
      ></input>
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
