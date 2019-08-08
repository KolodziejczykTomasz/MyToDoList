import React, { Component } from "react";

import Input from "../Input/Input";
import Navigation from "../Navigation/Navigation";
import Task from "../Task/Task";
import Footer from "../Footer/Footer";

import "./Root.css";

class App extends Component {
  state = {
    tasks: [],
    counter: 0,
    value: ""
  };

  handleInputValue = e => {
    const value = e.target.value;
    this.setState({
      value
    });
  };

  addTaskHandler = () => {
    const number = 1;
    const task = {
      id: this.state.counter,
      counterTask: this.state.value
    };
    this.setState(prevState => ({
      counter: this.state.counter + number,
      tasks: [...prevState.tasks, task],
      value: ""
    }));
    return true;
  };

  removeLastTaskHandler = () => {
    const tasks = [...this.state.tasks];
    tasks.pop();
    this.setState({
      tasks
    });
  };

  handleDelete(id) {
    const tasks = [...this.state.tasks];
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    this.setState({
      tasks,
      value: ""
    });
  }

  clearTaskHandler = () => {
    this.setState({
      tasks: [],
      counter: 0,
      value: ""
    });
  };

  render() {
    const displayTasks = this.state.tasks.map(task => (
      <Task
        key={task.id}
        text={task.text}
        taskCounter={task.counterTask}
        deleted={this.handleDelete.bind(this, task.id)}
      />
    ));

    return (
      <div className="Wrap">
        <h2 className="Main">My To Do List</h2>
        <div class="input-group mb-3">
          <Input
            class="form-control"
            value={this.state.value}
            InputValue={this.handleInputValue}
          />

          <div class="input-group-append">
            <Navigation
              added={this.addTaskHandler}
              removed={this.removeLastTaskHandler}
              value={this.state.value}
              tasksLength={this.state.tasks.length}
              cleared={this.clearTaskHandler}
            />
          </div>
        </div>

        <div className="Main">
          {displayTasks.length > 0 ? (
            displayTasks
          ) : (
            <h5>There's nothing here yet, please add some tasks!</h5>
          )}
        </div>
        <div className="Footer">
          <Footer lengthTask={this.state.tasks.length} />
        </div>
      </div>
    );
  }
}

export default App;
