import * as React from "react";
import { Pattern } from "../components/Pattern";
import Patterns from "../utils/Patterns";

export class PatternContainer extends React.Component {
  render() {
    return (
      <React.Fragment>
        <Pattern number={5} pattern={Patterns.Triangle} shape={"*"} />
      </React.Fragment>
    );
  }
}
