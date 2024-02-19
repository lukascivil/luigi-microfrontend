import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import { addInitListener } from "@luigi-project/client";
import Remote2 from "./remote2";

class App extends Component {
  constructor(props) {
    super(props);
    addInitListener((context) => {
      console.log("main.jsx Luigi Client initialized.", context);
    });

    console.log("Initialized");
  }

  render() {
    return <Remote2 />;
  }
}

createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
