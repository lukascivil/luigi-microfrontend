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
      <div style={{ borderColor: "red", borderStyle: "dashed" }}>
        luigi-container
        <luigi-container
          // viewURL="http://localhost:3003/remote-2.js"
          viewURL="https://micro-frontends.org/"
          // viewURL="host-sample1.html"
          webcomponent="false"
          label="my label"
          deferInit="true"
          context='{"label": "Calendar"}'
        ></luigi-container>
      </div>
      {/* <luigi-compound-container
        context='{"label": "Dashboard"}'
        compoundConfig={{}}
      ></luigi-compound-container> */}
    </div>
  );
};

export default Home;
