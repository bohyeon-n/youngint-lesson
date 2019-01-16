import * as React from "react";
import { FormContainer } from "../containers/FormContainer";
import { Pattern } from "../components/Pattern";
import { List } from "../components/List";

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

  onSelectPattern = (pattern: string): void => {
    this.setState({
      pattern
    });
  };
  render() {
    const { pattern, shape, number, submitSuccess } = this.state;
    const patterns = ["triangle", "reverseTriangle", "diamond"];
    return (
      <div>
        <h1>Pattern Stamp</h1>
        <List list={patterns} handleItemClick={this.onSelectPattern} />
        <FormContainer drawPattern={this.drawPattern} pattern={pattern} />
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
