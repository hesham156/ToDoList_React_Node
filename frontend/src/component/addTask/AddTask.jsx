import React from "react";
import { useState } from "react";
import style from "./addtask.module.css";
import axios from "axios";
import { useEffect } from "react";
import Input from "../input/Input";
const AddTask = () => {
  const [click, setClick] = useState(false);
  const [data, setData] = useState();
  const [UName, setUName] = useState();
  const [UEmail, setUEmail] = useState();
  const [UTask, setUTask] = useState();
  const [UPass, setUPass] = useState();
  const [TLevel, setTLevel] = useState();

  useEffect(() => {}, []);
  console.log(data);
  return (
    <div
      className={
        (click ? style.click : style.addTask) + " position-absolute center"
      }
    >
      <div
        className={
          (click ? style.btnclick : " ") +
          " shadow global position-absolute center"
        }
        onClick={() => {
          click ? setClick(false) : setClick(true);
        }}
      >
        +
      </div>
      <div className="center shadow flex-direction-column">
        <Input
          type="text"
          placeholde="task name"
          onChange={(e) => {
            setUName(e.target.value);
          }}
        />
        {/* <Input
          type="date"
          placeholde="task end at"
          onChange={(e) => {
            setUEmail(e.target.value);
          }}
        /> */}
        <div className={style.endat + " center"}>
          <Input
            type="number"
            placeholde="task end at"
            onChange={(e) => {
              setUEmail(e.target.value);
            }}
          />
          <select>
            <option value="">minuit</option>
            <option value="">Hours</option>
            <option value="">Day</option>
          </select>
        </div>

        <select
          onChange={(e) => {
            setTLevel(e.target.value);
          }}
        >
          <option value="1">very important</option>
          <option value="0">important</option>
          <option value="-1">not important</option>
        </select>
      </div>
    </div>
  );
};

export default AddTask;

// const SingUp = () => {
//   axios
//     .post("http://localhost:3001/users/singup", {
//       username: UName,
//       email: UEmail,
//       password: UPass,
//       tasks: [
//         {
//           taskName: UTask,
//         },
//       ],
//     })
//     .then((res) => setData(res.data))
//     .catch((err) => console.error(err));
// };
