import * as React from "react";
import { FormContainer } from "../containers/FormContainer";
import { Pattern } from "../components/Pattern";

export default class MainPage extends React.Component {
  state = {
    submitSuccess: false,
    number: "",
    pattern: "diamond",
    step: 0,
    shape: ""
  };

  drawPattern = (n: number, shape: string): void => {
    this.setState({
      submitSuccess: true,
      number: n,
      shape
    });
  };

  render() {
    const { pattern, shape, number, submitSuccess } = this.state;
    return (
      <div>
        <h1>Pattern Stamp</h1>
        <FormContainer drawPattern={this.drawPattern} />
        {submitSuccess ? (
          <Pattern
            number={parseFloat(number)}
            shape={shape}
            pattern={pattern}
          />
        ) : null}
      </div>
    );
  }
}
