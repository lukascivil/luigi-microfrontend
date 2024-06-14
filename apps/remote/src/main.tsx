import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./views/remote-home";
import Sample1 from "./views/sample1";
import Sample2 from "./views/sample2";
import { addInitListener } from "@luigi-project/client";
import "./index.css";

class App extends Component {
  constructor(props: any) {
    super(props);

    addInitListener((context) => {
      console.log("main.jsx Luigi Client initialized.", context);
    });

    console.log("Initialized");
  }

  render() {
    return (
      <BrowserRouter basename={`remoteMFE`}>
        <Routes>
          <Route path="/home" Component={Home} />
          <Route path="/sample1" Component={Sample1} />
          <Route path="/sample2" Component={Sample2} />
        </Routes>
      </BrowserRouter>
    );
  }
}

createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
