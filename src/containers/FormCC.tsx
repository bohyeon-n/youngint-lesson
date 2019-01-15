import * as React from "react";
import { Form } from "../components/Form";
import { Message } from "../components/Message";

export interface FormCCProps {
  drawPattern: any;
}
export class FormCC extends React.Component<FormCCProps, {}> {
  state = {
    number: "",
    pattern: "",
    validate: false,
    message: ""
  };

  getValidateMessage = (n: number) => {
    console.log(n);
    const message =
      n % 1 !== 0
        ? "양의 정수만 입력할 수 있습니다."
        : n < 0
        ? "0보다 큰 숫자를 입력해주세요."
        : n > 100
        ? "100보다 큰 숫자는 입력할 수 없습니다."
        : n === 0
        ? "0은 입력할 수 없습니다."
        : "";
    return message;
  };
  isValidate = (value: string) => {
    const number = Number(value);
    console.log(number);
    if (isNaN(number)) {
      value === ""
        ? this.setState({
            message: "",
            validate: false
          })
        : this.setState({
            message: "숫자를 입력해주세요.",
            validate: false
          });
      return false;
    } else {
      if (number > 0 && number <= 100 && number % 1 === 0) {
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

  onNumberChange = (value: string) => {
    this.setState({
      number: value
    });
    this.isValidate(value);
  };
  onPatternChange = (value: string) => {
    this.setState({
      pattern: value
    });
  };
  onSubmit = () => {
    const { number, validate, message, pattern } = this.state;
    this.setState({
      number: "",
      message: "",
      pattern: pattern
    });
    validate
      ? this.props.drawPattern(Number(number), pattern)
      : alert(`${message}
다시 입력해주세요.
    `);
  };
  render() {
    const { number, message, pattern } = this.state;
    return (
      <React.Fragment>
        <Form
          number={number}
          pattern={pattern}
          handleNumberChange={this.onNumberChange}
          handlePatternChange={this.onPatternChange}
          handleSubmit={this.onSubmit}
        />

        <Message message={message} />
      </React.Fragment>
    );
  }
}
