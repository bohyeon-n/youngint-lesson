import * as React from "react";
import { Form } from "../components/Form";
import { Message } from "../components/Message";
import { string } from "prop-types";

export interface FormContainerProps {
  readonly drawPattern: Function;
}

export class FormContainer extends React.Component<FormContainerProps, {}> {
  state = {
    number: "",
    pattern: "",
    validate: false,
    message: ""
  };

  getValidateMessage = (n: number): string => {
    const message =
      n < 0
        ? "0보다 큰 숫자를 입력해주세요."
        : n > 100
        ? "100보다 큰 숫자는 입력할 수 없습니다."
        : n === 0
        ? "0은 입력할 수 없습니다."
        : "";
    return message;
  };

  isValidate = (value: string): boolean => {
    const number = Number(value);

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
      if (number > 0 && number <= 100) {
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
    this.isValidate(value);
  };

  onPatternChange = (value: string): void => {
    this.setState({
      pattern: value
    });
  };

  onSubmit = (): void => {
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
