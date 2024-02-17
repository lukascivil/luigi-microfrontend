import React, { Component, useState, useEffect } from "react";
import {
  addInitListener,
  addContextUpdateListener,
  removeContextUpdateListener,
  removeInitListener,
} from "@luigi-project/client";
import "@luigi-project/container";

const Home = () => {
  const [message, setMessage] = useState("");
  const [initListener, setInitListener] = useState(null);
  const [contextUpdateListener, setContextUpdateListener] = useState(null);

  useEffect(() => {
    setInitListener(
      addInitListener((initialContext) => {
        setMessage("home.tsx Luigi Client initialized.");
      })
    );

    setContextUpdateListener(
      addContextUpdateListener((updatedContext) => {
        setMessage("home.tsx Luigi Client updated.");
      })
    );

    return function cleanup() {
      removeContextUpdateListener(contextUpdateListener);
      removeInitListener(initListener);
    };
  }, []);

  return (
    <div>
      <h1>Remote Home</h1>
      <div>{message}</div>
      <luigi-container
        viewURL="http://localhost:3000/views/cafe.js"
        // viewURL="http://localhost:3000/views/sample1.html"
        webcomponent="false"
        label="my label"
        context='{"label": "Calendar"}'
      ></luigi-container>
      {/* <luigi-compound-container
        context='{"label": "Dashboard"}'
        compoundConfig={{}}
      ></luigi-compound-container> */}
    </div>
  );
};

export default Home;
