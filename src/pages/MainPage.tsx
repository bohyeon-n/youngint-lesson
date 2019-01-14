import * as React from "react";
// import { PatternCC } from "../containers/PatternCC";

import { Hello } from "../components/Hello";
import { FormCC } from "../containers/FormCC";
import { TrianglePattern } from "../components/TrianglePattern";
export default class MainPage extends React.Component {
  state = {
    submitSuccess: false,
    value: ""
  };
  drawPattern = (n: number) => {
    this.setState({
      submitted: true,
      value: n
    });
  };
  render() {
    const { value, submitSuccess } = this.state;
    return (
      <div>
        <Hello name="world" />
        <FormCC drawPattern={this.drawPattern} />
        {submitSuccess ? (
          <TrianglePattern number={parseFloat(value)} pattern={"*"} />
        ) : null}
      </div>
    );
  }
}
