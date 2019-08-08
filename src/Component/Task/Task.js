import React from "react";
import "./Task.css";

const Task = props => {
  return (
    <div className="Task">
      <li key={""}>
        <span key={""}>
          {props.text}
          {props.taskCounter}
        </span>
        <button
          class="btn btnDelete btn-outline-danger btn-sm"
          onClick={props.deleted}
        >
          Delete
        </button>
      </li>
    </div>
  );
};

export default Task;
