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
      let className = taskName.toLowerCase().includes("break") ? "break-task" : "finished-task-name";
      return <li key={taskName}><span className={className}>{taskName}</span>: {minutes} minutes, and {seconds} seconds.</li>
    });
    
    let totalTimeObj = convertSecondsToTimeObject(totalTime);

    return (
    <div className="finished-container">
      <h2>Finished Tasks</h2>
      <ul className="finished-task-list">
        {li}
      </ul>
      <h3 class="total-time">Total Time: {totalTimeObj.hours} hours, {totalTimeObj.minutes} minutes.</h3>
    </div>
    );
  }
}
