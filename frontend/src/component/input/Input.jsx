import React from "react";
import style from "./input.module.css";
const Input = ({ placeholde, onChange, type }) => {
  if (type === "date") {
    return (
      <div
        className={style.input + " center"}
        onClick={() => {
          document.querySelector("#fc").focus();
        }}
      >
        <span>{placeholde}</span>
        <input
          id="fc"
          type={type}
          placeholder={placeholde}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </div>
    );
  } else {
    return (
      <>
        <input
          className={style.input}
          type={type}
          placeholder={placeholde}
          onChange={(e) => {
            onChange(e);
          }}
        />
      </>
    );
  }
};

export default Input;
