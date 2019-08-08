import React from "react";

import "./Input.css";

const Input = props => (
  <input
    className="InputData"
    type="text"
    placeholder="Add new task"
    key="id"
    value={props.value}
    onChange={props.InputValue}
  />
);

export default Input;
