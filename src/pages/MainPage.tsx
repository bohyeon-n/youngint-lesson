import * as React from "react";
import { Hello } from "../components/Hello";
import { FormContainer } from "../containers/FormContainer";
import { TrianglePattern } from "../components/TrianglePattern";

export default class MainPage extends React.Component {
  state = {
    submitSuccess: false,
    number: "",
    pattern: ""
  };

  drawPattern = (n: number, pattern: string): void => {
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
        <FormContainer drawPattern={this.drawPattern} />

        {submitSuccess ? (
          <TrianglePattern number={parseFloat(number)} pattern={pattern} />
        ) : null}
      </div>
    );
  }
}
