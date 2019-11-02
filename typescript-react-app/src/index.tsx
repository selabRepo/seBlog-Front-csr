import * as React from "react";
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";

import App from "./App";
import "./index.css";
const destination = document.querySelector(".root");

ReactDOM.render(
    <BrowserRouter>
    <App />
    </BrowserRouter>,
    destination
);