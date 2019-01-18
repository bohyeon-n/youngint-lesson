import * as React from "react";
import * as ReactDOM from "react-dom";
import MainPage from "./pages/MainPage";
import "./index.scss";
import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIgloo } from "@fortawesome/free-solid-svg-icons";

library.add(faIgloo);
ReactDOM.render(<MainPage />, document.getElementById("root"));
