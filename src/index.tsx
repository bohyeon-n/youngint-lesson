import * as React from "react";
import * as ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";
import { Provider } from "mobx-react";
import PatternStore from "./stores/pattern";
library.add(faCheckCircle);

const pattern = new PatternStore();
ReactDOM.render(
  <Provider pattern={pattern}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
