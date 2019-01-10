import * as React from "react";
import { TrianglePattern } from "../components/TrianglePattern";
import { Hello } from "../components/Hello";

export default class MainPage extends React.Component {
  render() {
    return (
      <div>
        <Hello name="world" />
        <TrianglePattern number={5} pattern={"*"} />
        <TrianglePattern number={10} pattern={"😻"} />
      </div>
    );
  }
}