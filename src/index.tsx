import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./components/app/app";

const vh = window.innerHeight * 0.01;
document.documentElement.style.setProperty("--vh", `${vh}px`);

ReactDOM.render(<App></App>, document.getElementById("app") as HTMLElement);
