import React, { Component } from "react";

class TimerConfig extends Component {
  handleChange = e => {
    const newBaseTime = this.props.baseTime;
    if (e.target.id === 'hours') newBaseTime.subtract(newBaseTime.get('hours'), 'hours').add(parseInt(e.target.value, 10), 'hours');
    if (e.target.id === 'minutes') newBaseTime.subtract(newBaseTime.get('minutes'), 'minutes').add(parseInt(e.target.value, 10), 'minutes');
    if (e.target.id === 'seconds') newBaseTime.subtract(newBaseTime.get('seconds'), 'seconds').add(parseInt(e.target.value, 10), 'seconds');

    this.props.setBaseTime(newBaseTime);
  };

  render() {
    return (
      <div>
        <div className="row">
          <h2 className="text-primary">Set timer</h2>
          <div className="form-group">
            <label htmlFor="hours">Hours</label>
            <input
              id="hours"
              className="form-control"
              type="number"
              defaultValue={this.props.baseTime.get("hours")}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="minutes">Minutes</label>
            <input
              id="minutes"
              className="form-control"
              type="number"
              defaultValue={this.props.baseTime.get("minutes")}
              onChange={this.handleChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="seconds">Seconds</label>
            <input
              id="seconds"
              className="form-control"
              type="number"
              defaultValue={this.props.baseTime.get("seconds")}
              onChange={this.handleChange}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default TimerConfig;
