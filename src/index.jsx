import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Grommet } from "grommet";
import { customTheme } from "./styles";

ReactDOM.render(
  <Grommet full theme={customTheme} style={{ height: "100%" }}>
    <App />
  </Grommet>,
  document.getElementById("root")
);
