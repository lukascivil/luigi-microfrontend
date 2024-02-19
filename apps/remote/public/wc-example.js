import emojiPickerElement from "https://cdn.skypack.dev/emoji-picker-element";

export default class MyMicroFrontend extends HTMLElement {
  constructor() {
    super();

    const template = document.createElement("template");
    template.innerHTML = `<section><p>Hello World!</p><emoji-picker></emoji-picker></section>`;

    const templateBtn = document.createElement("template");
    templateBtn.innerHTML =
      '<button id="aButton" onClick="alert(\'oi\')">Click me!</button>';

    this._shadowRoot = this.attachShadow({
      mode: "open",
      delegatesFocus: false,
    });

    this._shadowRoot.appendChild(template.content.cloneNode(true));
    this._shadowRoot.appendChild(templateBtn.content.cloneNode(true));
  }
}
