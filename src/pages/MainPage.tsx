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
    shape: "",
    validate: false,
    submitPattern: "trianlge"
  };

  drawPattern = (n: number, shape: string, pattern: "string"): void => {
    this.setState({
      submitSuccess: true,
      number: n,
      shape,
      submitPattern: this.state.pattern
    });
  };

  onSelectPattern = (pattern: string): void => {
    this.setState({
      pattern,
      step: 1
    });
  };

  onChangeStep = (step: number) => {
    this.setState({
      step: step
    });
  };

  getValidate = (validate: boolean) => {
    this.setState({
      validate
    });
  };

  render() {
    const {
      pattern,
      shape,
      number,
      submitSuccess,
      step,
      submitPattern
    } = this.state;
    const patterns = ["triangle", "reverseTriangle", "diamond"];
    return (
      <div>
        <h1>Pattern Stamp</h1>
        <List
          list={patterns}
          handleItemClick={this.onSelectPattern}
          activeItem={pattern}
        />
        <FormContainer
          drawPattern={this.drawPattern}
          pattern={pattern}
          step={step}
          handleChangeStep={this.onChangeStep}
          getValidate={this.getValidate}
        />
        {submitSuccess && this.state.validate ? (
          <Pattern
            number={parseFloat(number)}
            shape={shape}
            pattern={submitPattern}
          />
        ) : null}
      </div>
    );
  }
}
