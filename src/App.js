import React, { Component } from "react";
import "./App.css";
import Timer from './components/Timer/Timer';


class App extends Component {
  render() {
    return (
      <div className="container-fluid">
        <Timer />
      </div>
    );
  }
}

export default App;
