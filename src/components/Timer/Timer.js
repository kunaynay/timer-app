import React, { Component } from "react";
import moment from "moment";
import TimerHeader from "../TimerHeader/TimerHeader";
import TimerDisplay from "./TimerDisplay";
import TimerButton from "./TimerButton";
import TimerConfig from "../TimerConfig";
import * as timerStates from "../../TimerState";

class Timer extends Component {
  state = {
    currentTime: moment.duration(25, "minutes"),
    baseTime: moment.duration(25, "minutes"),
    timerState: timerStates.NOT_SET,
    timer: null
  };

  setBaseTime = newBaseTime => {
    this.setState({
      baseTime: newBaseTime,
      currentTime: newBaseTime
    });
  };

  startTimer = () => {
    this.setState({
      timerState: timerStates.RUNNING,
      timer: setInterval(this.reduceTimer, 1000)
    });
  };

  stopTimer = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.NOT_SET,
      timer: null,
      currentTime: moment.duration(this.state.baseTime)
    });
  };

  reduceTimer = () => {
    if (this.state.currentTime.get('hours') === 0 &&
      this.state.currentTime.get('minutes') === 0 &&
      this.state.currentTime.get('seconds') === 0) {
        this.completeTimer();
        return;
      }

    const newTime = moment.duration(this.state.currentTime);
    newTime.subtract(1, "second");

    this.setState({
      currentTime: newTime
    });
  };

  completeTimer = () => {
    if (this.state.timer) {
      clearInterval(this.state.timer);
    }

    this.setState({
      timerState: timerStates.COMPLETE,
      timer: null,
    });
  }

  render() {
    return (
      <div className="app-content">
        <TimerHeader />
        <TimerDisplay currentTime={this.state.currentTime}
        timerState={this.state.timerState} />
        <TimerButton
          startTimer={this.startTimer}
          stopTimer={this.stopTimer}
          timerState={this.state.timerState}
        />
        {this.state.timerState !== timerStates.RUNNING && (
          <TimerConfig
            baseTime={this.state.baseTime}
            setBaseTime={this.setBaseTime}
          />
        )}
      </div>
    );
  }
}

export default Timer;
