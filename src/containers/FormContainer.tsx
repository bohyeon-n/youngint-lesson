import * as React from "react";
import { Form } from "../components/Form";
import { Message } from "../components/Message";

export interface FormContainerProps {
  readonly drawPattern: Function;
  readonly pattern: string;
  readonly step: number;
  readonly handleChangeStep: Function;
  readonly getValidate: Function;
}

export class FormContainer extends React.Component<FormContainerProps, {}> {
  state = {
    number: "",
    validate: false,
    message: "",
    shape: ""
  };

  getValidateMessage = (n: number): string => {
    const { pattern } = this.props;
    const message =
      n < 0
        ? "0보다 큰 숫자를 입력해주세요."
        : n > 100
        ? "100보다 큰 숫자는 입력할 수 없습니다."
        : n === 0
        ? "0은 입력할 수 없습니다."
        : pattern === "diamond" && n % 2 === 0
        ? "다이아몬드 패턴은 홀수만 입력할 수 있습니다"
        : "";
    return message;
  };

  isValidate = (value: string): boolean => {
    const { pattern } = this.props;
    const number = Number(value);

    if (value === "") {
      this.setState({
        message: "",
        validate: false
      });
      return false;
    }
    if (isNaN(number)) {
      this.setState({
        message: "숫자를 입력해주세요.",
        validate: false
      });
      return false;
    } else if (value.indexOf(".") !== -1) {
      this.setState({
        message: "정수만 입력할 수 있습니다.",
        validate: false
      });
    } else if (!isFinite(number)) {
      const message = value.slice(0, 1) === "-" ? "작은 수" : "큰 수";
      this.setState({
        message: `너무 ${message}를 입력하셨네요🤮 0보다 크고 100보다 작은 정수만 입력할 수 있습니다.`,
        validate: false
      });
      return false;
    } else {
      if (
        number > 0 &&
        number <= 100 &&
        !(pattern === "diamond" && number % 2 === 0)
      ) {
        this.setState({
          validate: true,
          message: ""
        });
        return true;
      } else {
        this.setState({
          message: this.getValidateMessage(number),
          validate: false
        });
        return false;
      }
    }
  };

  onNumberChange = (value: string): void => {
    this.setState({
      number: value
    });
    const validate = this.isValidate(value);
    this.props.getValidate(validate);
    this.props.handleChangeStep(2);
  };

  onShapeChange = (value: string): void => {
    this.setState({
      shape: value
    });
    this.props.handleChangeStep(1);
  };

  onSubmit = (): void => {
    console.log("sub  ");
    const { number, validate, message, shape } = this.state;
    const { pattern } = this.props;
    this.setState({
      number: "",
      message: "",
      pattern,
      shape
    });
    validate
      ? this.props.drawPattern(Number(number), shape, pattern)
      : alert(`${message}
다시 입력해주세요.
    `);
  };

  render() {
    const { number, message, shape, validate } = this.state;
    const { step } = this.props;
    return (
      <React.Fragment>
        <div>모양을 입력해주세요 *</div>
        <Form
          value={shape}
          handleInputChange={this.onShapeChange}
          labelName="모양"
          focus={step === 1}
          onSubmit={this.onSubmit}
        />
        <div>
          숫자를 입력해주세요.* 숫자는 1부터 100까지의 정수만을 입력할 수
          있습니다.
        </div>
        <Form
          focus={false}
          value={number}
          handleInputChange={this.onNumberChange}
          labelName="숫자"
          onSubmit={this.onSubmit}
        />

        <Message message={message} alert={!validate} />

        <button onClick={this.onSubmit}>패턴 출력하기</button>
      </React.Fragment>
    );
  }
}
