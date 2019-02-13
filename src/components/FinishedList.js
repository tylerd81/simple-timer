import React, { Component } from 'react'
import {convertSecondsToTimeObject} from "../convert";

// {taskName: "name", timeSpent: seconds}

export default class FinishedList extends Component {  
  render() {
  
    let totalTime = 0;
    const {finishedTasks} = this.props;
    const li = finishedTasks.map(task => {      
      let {minutes, seconds} = convertSecondsToTimeObject(task.timeSpent);
      totalTime += task.timeSpent;
      let taskName = task.taskName.length === 0 ? "Untitled Task" : task.taskName;

      return <li key={taskName}><span className="finished-task-name">{taskName}</span>: {minutes} minutes, and {seconds} seconds.</li>
    });
    
    let totalTimeObj = convertSecondsToTimeObject(totalTime);

    return (
    <div className="finished-container">
      <h3>{totalTimeObj.hours} hours, {totalTimeObj.minutes} minutes spent so far.</h3>
      <ul className="finished-task-list">
        {li}
      </ul>
    </div>
    );
  }
}
