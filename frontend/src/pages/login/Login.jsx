import React from "react";
import Input from "../../component/input/Input";
import style from "./login.module.css";
import logo from "../../assets/imgs/images-removebg-preview.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faFontAwesome,
  faGoogle,
  faTwitter,
} from "@fortawesome/free-brands-svg-icons";
const Login = () => {
  return (
    <div className={style.login + " center flex-direction-row"}>
      <div className={"center flex-direction-column"}>
        <div
          className={style.loginForm + " shadow center flex-direction-column"}
        >
          <div className={style.logo}>
            <img src={logo} alt="logo" />
          </div>
          <div className="center position-absolute">
            <h3>Login</h3>
          </div>
          <div className={style.form + " center flex-direction-column"}>
            <Input placeholde="Email" type="email" />
            <Input placeholde="password" type="password" />
            <button>Login</button>
          </div>
          <div className={style.or + " center"}>
            <span>OR</span>
          </div>
          <div>
            <ul className="center flex-direction-cloumn">
              <li>
                <FontAwesomeIcon icon={faFacebook} />
              </li>
              <li>
                <FontAwesomeIcon icon={faGoogle} />
              </li>
              <li>
                <FontAwesomeIcon icon={faTwitter} />{" "}
              </li>
            </ul>
          </div>
          <div className={style.or + " center"}>
            <span>OR</span>
          </div>
          <div className="center">
            <a>Create Account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
