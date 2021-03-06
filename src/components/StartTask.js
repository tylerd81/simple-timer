import React, { Component } from "react";

export default class StartTask extends Component {

  state = {
    taskNameInput: "",
  }
  
  taskNameInputChange = (event) => {
    this.setState({taskNameInput: event.target.value});
  }

  timeButtonPressed = (event) => {
    if(this.state.taskNameInput === "") {
      return;
    }
    const {startTask} = this.props;
    console.log(this.state.taskNameInput);

    try {
    let minutes = Number.parseInt(event.target.name.substring(5));
    startTask(this.state.taskNameInput, minutes * 60);
    
    }catch(e) {
      console.log("Error parsing int from the button name");
      return;
    }

    // switch(event.target.name) {


    //   case "time-10":
    //     startTask(this.state.taskNameInput, 10 * 60);
    //     break;
    //   case "time-20":
    //     startTask(this.state.taskNameInput, 20 * 60);
    //     break;
    //   case "time-30":
    //     startTask(this.state.taskNameInput, 30 * 60);
    //     break;
    //   default:
    //     return;
    // }
  }
  render() {
    return (
      <div id="st-main-container">
        <div className="controls-container">
          <div className="add-task-container">            
            <input
              type="text"
              name="task-name"
              className="add-task-input"
              placeholder="Enter the task name"
              value={this.state.taskNameInput}
              onChange={this.taskNameInputChange}
            />
          </div>

          <div className="break-button-container">
            <button type="button" name="time-5" onClick={this.timeButtonPressed}>
              5 minutes
            </button>
            <button type="button" name="time-10" onClick={this.timeButtonPressed}>
              10 minutes
            </button>
            <button type="button" name="time-15" onClick={this.timeButtonPressed}>
              15 minutes
            </button>
            <button type="button" name="time-20" onClick={this.timeButtonPressed}>
              20 minutes
            </button>
            <button type="button" name="time-25" onClick={this.timeButtonPressed}>
              25 minutes
            </button>
            <button type="button" name="time-30" onClick={this.timeButtonPressed}>
              30 minutes
            </button>
          </div>
        </div>
      </div>
    );
  }
}
