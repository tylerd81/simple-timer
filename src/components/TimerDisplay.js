import React, { Component } from 'react'

export default class TimerDisplay extends Component {
  render() {
    const {minutes, seconds} = this.props;

    return (
      <div>
        <h1 className="task-name">{this.props.taskName}</h1>

        <div className="timer-display">
          <span className="minutes-display">{minutes}</span>
          <span className="colon">:</span>
          <span className="seconds-display">{seconds}</span>
        </div>
        
      </div>
    );
  }
}
