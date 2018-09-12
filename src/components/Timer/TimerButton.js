import React, { Component } from "react";
import * as timerStates from "../../TimerState";

class TimerButton extends Component {
  getButton = () => {
    if (this.props.timerState === timerStates.NOT_SET)
      return (
        <button className="btn btn-primary" onClick={this.props.startTimer}>
          Start
        </button>
      );

    if (this.props.timerState === timerStates.RUNNING)
      return (
        <button className="btn btn-danger" onClick={this.props.stopTimer}>
          Pause
        </button>
      );

    if (this.props.timerState === timerStates.COMPLETE)
      return (
        <button className="btn btn-success" onClick={this.props.stopTimer}>
          Reset
        </button>
      );  
  };

  render() {
    return (
      <div>
        <div className="row">{this.getButton()}</div>
      </div>
    );
  }
}

export default TimerButton;
