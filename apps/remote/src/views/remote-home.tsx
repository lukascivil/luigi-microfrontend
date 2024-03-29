import { useState, useEffect, ReactElement } from "react";
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
        setMessage("remote-home.tsx Luigi Client initialized.");
      })
    );

    setContextUpdateListener(
      addContextUpdateListener((updatedContext) => {
        setMessage("remote-home.tsx Luigi Client updated.");
      })
    );

    return function cleanup() {
      removeContextUpdateListener(contextUpdateListener);
      removeInitListener(initListener);
    };
  }, []);

  return (
    <div style={{ borderColor: "blue", borderStyle: "dashed" }}>
      <h1>Remote Home http://localhost:3002/</h1>
      <div>{message}</div>
      <div
        style={{
          borderColor: "red",
          borderStyle: "dashed",
          marginTop: "16px",
        }}
      >
        luigi-container wc-example.js web component example
        <luigi-container
          viewURL="http://localhost:3002/wc-example.js"
          webcomponent="false"
          label="my label"
          context='{"label": "Calendar"}'
          deferInit="true"
        ></luigi-container>
      </div>
      <div
        style={{
          borderColor: "green",
          borderStyle: "dashed",
          marginTop: "16px",
        }}
      >
        luigi-container microfrontend.html
        <luigi-container
          data-test-id="iframe-based-container-test"
          viewURL="http://localhost:3002/microfrontend.html"
          context='{"title": "Projects", "content":" "}'
        ></luigi-container>
      </div>
    </div>
  );
};

export default Home;
