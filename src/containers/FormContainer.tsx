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
          validate: true
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
  };

  onShapeChange = (value: string): void => {
    this.setState({
      shape: value
    });
  };

  onSubmit = (): void => {
    const { number, validate, message, shape } = this.state;
    const { pattern } = this.props;
    this.setState({
      number: "",
      message: "",
      pattern,
      shape
    });
    validate
      ? this.props.drawPattern(Number(number), shape)
      : alert(`${message}
다시 입력해주세요.
    `);
  };

  render() {
    const { number, message, shape } = this.state;
    return (
      <React.Fragment>
        <Form
          number={number}
          shape={shape}
          handleNumberChange={this.onNumberChange}
          handlePatternChange={this.onShapeChange}
          handleSubmit={this.onSubmit}
          step={this.props.step}
          handleChangeStep={this.props.handleChangeStep}
        />

        <Message message={message} />
      </React.Fragment>
    );
  }
}
