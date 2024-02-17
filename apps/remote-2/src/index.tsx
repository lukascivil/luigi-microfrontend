import { luigiClientInit, addInitListener } from "@luigi-project/client";
import { useEffect } from "react";

export default function MyMicroFrontend() {
  const element = document.createElement("div");
  element.innerHTML = `<h1>Hello from my micro frontend!</h1>`;

  useEffect(() => {
    luigiClientInit();

    addInitListener((initialContext) => {
      console.log("initialContext", initialContext);
    });
  }, []);

  return element;
}
