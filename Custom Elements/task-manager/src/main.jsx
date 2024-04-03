import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

class AppElement extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    ReactDOM.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>,
      this
    );
  }
}

const ELEMEMT_ID = "task-manager";

if (!customElements.get(ELEMEMT_ID)) {
  customElements.define(ELEMEMT_ID, AppElement);
}
