import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route } from "react-router-dom";
import Home from "./views/remote-home";
import Sample1 from "./views/sample1";
import Sample2 from "./views/sample2";
import { addInitListener } from "@luigi-project/client";
import "./index.css";

class App extends Component {
  constructor(props) {
    super(props);
    addInitListener((context) => {
      console.log("main.jsx Luigi Client initialized.", context);
    });

    console.log("Initialized");
  }

  render() {
    return (
      <BrowserRouter basename={`remote#`}>
        <Route path="/home" component={Home} />
        <Route path="/sample1" component={Sample1} />
        <Route path="/sample2" component={Sample2} />
      </BrowserRouter>
    );
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
