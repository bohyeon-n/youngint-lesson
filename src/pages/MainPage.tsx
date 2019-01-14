import * as React from "react";
// import { PatternCC } from "../containers/PatternCC";

import { Hello } from "../components/Hello";
import { FormCC } from "../containers/FormCC";
import { TrianglePattern } from "../components/TrianglePattern";
export default class MainPage extends React.Component {
  state = {
    submitSuccess: false,
    number: "",
    pattern: ""
  };
  drawPattern = (n: number, pattern: string) => {
    this.setState({
      submitSuccess: true,
      number: n,
      pattern
    });
  };
  render() {
    const { pattern, number, submitSuccess } = this.state;
    return (
      <div>
        <Hello name="world" />
        <FormCC drawPattern={this.drawPattern} />

        {submitSuccess ? (
          <TrianglePattern number={parseFloat(number)} pattern={pattern} />
        ) : null}
      </div>
    );
  }
}
