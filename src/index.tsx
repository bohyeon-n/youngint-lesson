import * as React from "react";
import * as ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faCheckCircle,
  faExclamationTriangle
} from "@fortawesome/free-solid-svg-icons";
import { Provider } from "mobx-react";
import Pattern from "./stores/patternStore";

library.add(faCheckCircle, faExclamationTriangle);

const patternStore = new Pattern();
ReactDOM.render(
  <Provider patternStore={patternStore}>
    <MainPage />
  </Provider>,
  document.getElementById("root")
);
