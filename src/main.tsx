import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import { buttonContext, ButtonCtx } from './context/ButtonContext';

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <ButtonCtx.Provider value={buttonContext}>
      <App />
    </ButtonCtx.Provider>
  </React.StrictMode>
);
