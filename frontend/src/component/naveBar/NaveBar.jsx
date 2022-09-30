import React, { useState } from "react";
import style from "./navebar.module.css";
import logo from "../../assets/imgs/images-removebg-preview.png";
const NaveBar = () => {
  const [cl, setCl] = useState(false);
  return (
    <div className={style.navebar + " center"}>
      <div className="container center">
        <div className={style.logo}>
          <img width="65px" src={logo} alt="To_Do_List_Logo" />
        </div>
        <div className={style.lnks + " center justify-content-end"}>
          <span>
            <button
              onClick={() => {
                cl ? setCl(false) : setCl(true);
                console.log(cl);
              }}
            >
              |||
            </button>
          </span>
          <ul
            className={(cl ? style.clme : "") + " center justify-content-end"}
          >
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">about</a>
            </li>
            <li>
              <a href="/">Concet</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default NaveBar;
