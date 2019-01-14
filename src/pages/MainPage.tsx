import * as React from "react";
import { PatternCC } from "../containers/PatternCC";
import { Hello } from "../components/Hello";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Hello name="world" />
        <PatternCC />
      </div>
    );
  }
}
