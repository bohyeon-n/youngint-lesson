import * as React from "react";
import { FormContainer } from "../containers/FormContainer";
import { Pattern } from "../components/Pattern";
import { List } from "../components/List";

export default class MainPage extends React.Component {
  state = {
    number: "",
    pattern: "diamond",
    step: 0,
    shape: "",
    validate: false,
    submitPattern: "trianlge",
    submitNumber: "",
    firstSubmit: false,
    formerSubmit: false,
    formerInputState: {
      number: "",
      shape: "",
      pattern: ""
    }
  };

  drawPattern = (n: number, shape: string, pattern: string): void => {
    if (this.state.firstSubmit) {
      this.setState({
        formerSubmit: true,
        formerInputState: {
          number: this.state.number,
          pattern: this.state.pattern,
          shape: this.state.shape
        }
      });
    } else {
      this.setState({ firstSubmit: true });
    }

    this.setState({
      number: n,
      shape,
      pattern,
      submitPattern: this.state.pattern,
      submitNumber: n
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
      step,
      submitPattern,
      submitNumber,
      formerInputState,
      formerSubmit
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

        {this.state.firstSubmit && (
          <Pattern
            number={Number(submitNumber)}
            shape={shape}
            pattern={submitPattern}
          />
        )}
        {formerSubmit && (
          <div>
            <div>이전 패턴</div>
            <Pattern
              number={Number(formerInputState.number)}
              shape={formerInputState.shape}
              pattern={formerInputState.pattern}
            />
          </div>
        )}
      </div>
    );
  }
}
