import { luigiClientInit, addInitListener } from "@luigi-project/client";
import { useEffect } from "react";
import "@luigi-project/container";

const Remote2 = () => {
  useEffect(() => {
    luigiClientInit();

    console.log("Remote2 started");

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
      Remote2 http://localhost:3003/
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
