import React from "react";

import "./Navigation.css";

const navigation = props => (
  <div class="Navigation">
    <button
      class={
        props.value === ""
          ? "btn btn-outline-success btn-sm disabled"
          : "btn btn-outline-success btn-sm active"
      }
      onClick={props.value !== "" ? props.added : null}
    >
      Add Task
    </button>

    <button
      class={
        props.tasksLength !== 0
          ? "btn btn-outline-dark btn-sm active"
          : "btn btn-outline-dark btn-sm disabled"
      }
      onClick={props.cleared}
    >
      Clear Tasks
    </button>
    <button
      class={
        props.tasksLength !== 0
          ? "btn btn-outline-warning btn-sm active"
          : "btn btn-outline-warning btn-sm disabled"
      }
      onClick={props.removed}
    >
      Remove last{" "}
    </button>
  </div>
);

export default navigation;
