import * as React from "react";
// import { PatternCC } from "../containers/PatternCC";

import { Hello } from "../components/Hello";
import { FormCC } from "../containers/FormCC";
import { TrianglePattern } from "../components/TrianglePattern";
export default class MainPage extends React.Component {
  state = {
    submitted: false,
    value: ""
  };
  drawPattern = (n: number) => {
    this.setState({
      submitted: true,
      value: n
    });
  };
  render() {
    const { value, submitted } = this.state;
    return (
      <div>
        <Hello name="world" />
        <FormCC drawPattern={this.drawPattern} />
        {submitted ? (
          <TrianglePattern number={parseFloat(value)} pattern={"*"} />
        ) : null}
      </div>
    );
  }
}
