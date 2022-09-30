import React from "react";
import style from "./task.module.css";
const Taskes = () => {
  return (
    <div className={style.tasks + " align-items-start center"}>
      <div className="container">
        {/* <div className={style.task}>
          <div className="center">
            <div className={style.taskTitle + " center"}>
              <h3>Task 1</h3>
            </div>
            <div className={style.taskInfo}>

            </div>
          </div>
          <div></div>
        </div> */}
        <table style={{ width: "100%" }}>
          <thead>
            <tr>
              <th style={{ width: "30%" }}>task</th>
              <th>Start at</th>
              <th>End At</th>
              <th>Gift</th>
              <th>state</th>
            </tr>
            <tr>
              <td>JavaScript</td>
              <td></td>
              <td></td>
              <td></td>
              <td>
                <span></span>
              </td>
            </tr>
          </thead>
        </table>
      </div>
    </div>
  );
};

export default Taskes;
