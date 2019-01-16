import * as React from "react";
import { Pattern } from "../components/Pattern";

export class PatternContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Pattern number={5} pattern={"triangle"} shape={"*"} />
      </React.Fragment>
    );
  }
}
