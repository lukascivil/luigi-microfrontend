import {
  luigiClientInit,
  addInitListener,
  addCustomMessageListener,
} from "@luigi-project/client";
import { useEffect, useState } from "react";
import "@luigi-project/container";

const Remote2 = () => {
  const [luigiMessage, setLuigiMessage] = useState("");

  useEffect(() => {
    luigiClientInit();

    console.log("Remote2 started");

    addCustomMessageListener("remote-react-admin", (message) => {
      setLuigiMessage(JSON.stringify(message));
    });

    addInitListener((initialContext) => {
      console.log("initialContext", initialContext);
    });
  }, []);

  return (
    <div
      style={{
        borderColor: "red",
        borderStyle: "dashed",
        marginTop: "16px",
      }}
    >
      Remote2 http://localhost:3003/ <br />
      Remote-react-admin message: {luigiMessage}
      <div
        style={{
          borderColor: "blue",
          borderStyle: "dashed",
          marginTop: "16px",
        }}
      >
        Remote-react-admin http://localhost:3004/
        <luigi-container
          data-test-id="iframe-based-container-test"
          viewURL="http://localhost:3004"
          context='{"title": "Projects", "content":" "}'
        ></luigi-container>
      </div>
    </div>
  );
};

export default Remote2;
