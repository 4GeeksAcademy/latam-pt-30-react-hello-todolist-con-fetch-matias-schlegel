//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";
import "../styles/buttonClearTask.css";

//import your own components
import { Fetch } from "./component/Fetch.jsx";

//render your react application
ReactDOM.render(<Fetch />, document.querySelector("#app"));
