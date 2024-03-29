import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./main.scss";
import "bootstrap/dist/css/bootstrap.min.css";
import Layout from "./components/layout";

import { AppProvider } from "./Context";

ReactDOM.render(
  <React.StrictMode>
    <AppProvider>
      <Layout>
        <App />
      </Layout>
    </AppProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
