import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import registerServiceWorker from "./registerServiceWorker";
import Popper from "popper.js";

global.jQuery = require("jquery");
require("bootstrap");

ReactDOM.render(<App />, document.getElementById("root"));
registerServiceWorker();
