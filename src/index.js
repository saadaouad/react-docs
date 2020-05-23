import React from "react";
import "react-app-polyfill/ie11"; // For IE 11 support
import "react-app-polyfill/ie9"; // For IE 9-11 support
import ReactDOM from "react-dom";
import "./index.scss";
import registerServiceWorker from "./registerServiceWorker";
import Home from "./routes/index.js";

ReactDOM.render(<Home />, document.getElementById("root"));
registerServiceWorker();
