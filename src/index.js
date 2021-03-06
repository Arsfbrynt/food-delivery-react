import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Form from "./Login/Form"
import reportWebVitals from "./reportWebVitals";
import { StateProvider } from "./Components/StateProvider";
import reducer, { initialState } from "./Components/reducer";

ReactDOM.render(
  <React.StrictMode>
    <StateProvider initialState={initialState} reducer={reducer}>

      <Form />
    </StateProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
