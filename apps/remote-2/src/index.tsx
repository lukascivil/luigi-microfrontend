import { luigiClientInit, addInitListener } from "@luigi-project/client";
import { useEffect } from "react";

const Remote2 = () => {
  useEffect(() => {
    luigiClientInit();

    console.log("Remote2 started");

    addInitListener((initialContext) => {
      console.log("initialContext", initialContext);
    });
  }, []);

  return <div>Remote2 http://localhost:3003/</div>;
};

export default Remote2;
