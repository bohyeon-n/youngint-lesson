import * as React from "react";
import * as ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faCheckCircle } from "@fortawesome/free-solid-svg-icons";

library.add(faCheckCircle);
ReactDOM.render(<MainPage />, document.getElementById("root"));
