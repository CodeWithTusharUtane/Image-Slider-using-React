import React from "react";
import ReactDOM from "react-dom/client";
import {slider} from './SliderData'
import App from "./App";
ReactDOM.createRoot(document.getElementById("root")).render(<App slides={slider}/>);
