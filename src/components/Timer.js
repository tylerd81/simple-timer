import React, { Component } from "react";
import TimerDisplay from "./TimerDisplay";
import { convertSecondsToTimeObject } from "../convert";

export default class Timer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      seconds: props.seconds,
      minutes: props.minutes,
    };
  }  

  startButtonPressed = () => {
    this.props.start();
  }

  stopButtonPressed = () => {
    this.props.pause();
  }

  finishedButtonPressed = () => {
    this.props.finished();
  }
  
  render() {
    const {minutes, seconds} = convertSecondsToTimeObject(this.props.seconds);

    return (
      <div className="timer-container">
        <h2>{this.props.taskName}</h2>
        <TimerDisplay minutes={minutes} seconds={seconds}/>
        <div className="timer-controls">
          <button type="button" name="start" onClick={this.startButtonPressed}>
            Start
          </button>
          <button type="button" name="start" onClick={this.stopButtonPressed}>
            Stop
          </button>
          <button type="button" name="finished" onClick={this.finishedButtonPressed}>
            Finished
          </button>
        </div>

      </div>
    );
  }
}
