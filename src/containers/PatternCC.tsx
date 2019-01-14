import * as React from "react";
import { TrianglePattern } from "../components/TrianglePattern";

export class PatternCC extends React.Component {
  render() {
    return (
      <React.Fragment>
        <TrianglePattern number={5} pattern={"*"} />
      </React.Fragment>
    );
  }
}
