import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";

class TaskAppElement extends HTMLElement {
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

const ELEMEMT_ID = "task-manager-with-object";

if (!customElements.get(ELEMEMT_ID)) {
  customElements.define(ELEMEMT_ID, TaskAppElement);
}
