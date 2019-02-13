import React, { Component } from "react";
import StartTask from "./components/StartTask";
import FinishedList from "./components/FinishedList";
import Timer from "./components/Timer";

class App extends Component {
  timerId = null;
  timerDone = false;
  timerRunning = false;
  taskWasFinished = false;

  state = {
    tasks: [],
    taskName: "No Task Yet",

    currentSeconds: 0,
    elapsedSeconds: 0
  };

  startTask = (taskName, startingTime = 0) => {
    this.setState({
      currentSeconds: startingTime,
      taskName,
      elapsedSeconds: 0,
    });
  };

  startTimer = () => {
    if(!this.timerRunning) {
      this.timerId = setInterval(this.tick, 1000);
      this.timerRunning = true;
    }
    this.taskWasFinished = false;  
  };

  stopTimer = () => {
    clearInterval(this.timerId);
    this.timerRunning = false;
    console.log("timer done");
  };

  tick = () => {
    const {currentSeconds} = this.state;
    if(currentSeconds - 1 >= 0) {
      this.setState({currentSeconds: currentSeconds - 1, elapsedSeconds: this.state.elapsedSeconds + 1});

    }else{
      this.timerDone = true;
      this.playAlarm();
      this.finishedTask();
    }
  };

  playAlarm = () => {
    console.log("ding ding ding");
  }

  finishedTask = () => {
    this.stopTimer();

    if(this.state.elapsedSeconds === 0) {
      return; //no task was running
    }
    if(!this.taskWasFinished) {
      const task = {taskName: this.state.taskName, timeSpent: this.state.elapsedSeconds};
      this.setState({tasks: [...this.state.tasks, task]});
      this.taskWasFinished = true;
    }
  }

  render() {
    return (
      <React.Fragment>
        <StartTask startTask={this.startTask} />

        <div className="lower-container">
          <Timer
            taskName={this.state.taskName}
            seconds={this.state.currentSeconds}
            start={this.startTimer}
            pause={this.stopTimer}
            finished={this.finishedTask}
          />
          <FinishedList finishedTasks={this.state.tasks} />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
