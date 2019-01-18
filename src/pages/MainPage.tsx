import * as React from "react";
import { FormContainer } from "../containers/FormContainer";
import { Pattern } from "../components/Pattern";
import { List } from "../components/List";

export default class MainPage extends React.Component {
  state = {
    number: "",
    pattern: "triangle",
    step: 0,
    shape: "",
    validate: false,
    submitPattern: "trianlge",
    submitNumber: "",
    submitShape: "",
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
          number: this.state.submitNumber,
          pattern: this.state.submitPattern,
          shape: this.state.submitShape
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
      submitNumber: n,
      submitShape: shape
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
    const patterns = [
      "triangle",
      "reverseTriangle",
      "diamond",
      "pattern4",
      "pattern5"
    ];
    return (
      <div>
        <h1>Pattern Stamp</h1>
        <p>
          패턴을 선택하고 모양과 숫자를 입력해주세요. <br />
          입력 후 패턴 출력하기 버튼을 누르면 원하는 패턴이 출력됩니다.
        </p>
        <div>패턴을 선택해주세요.</div>
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
        <div className="printed">
          {this.state.firstSubmit && (
            <div className="pattern">
              <div>출력 결과</div>
              <Pattern
                number={Number(submitNumber)}
                shape={shape}
                pattern={submitPattern}
              />
            </div>
          )}
          {formerSubmit && (
            <div className="pattern">
              <div>이전 패턴</div>
              <Pattern
                number={Number(formerInputState.number)}
                shape={formerInputState.shape}
                pattern={formerInputState.pattern}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
