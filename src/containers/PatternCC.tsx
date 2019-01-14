import * as React from "react";
import { Input } from "../components/Form";
import { TrianglePattern } from "../components/TrianglePattern";

export class PatternCC extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Input />
        <TrianglePattern number={5} pattern={"*"} />
      </React.Fragment>
    );
  }
}
