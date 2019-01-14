import * as React from "react";
import { Form } from "../components/Form";
import { Message } from "../components/Message";

export interface FormCCProps {
  drawPattern: any;
}
export class FormCC extends React.Component<FormCCProps, {}> {
  state = {
    value: "",
    validate: false,
    message: ""
  };

  getValidateMessage = (n: number) => {
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
  isValidate = (value: string) => {
    const number = parseFloat(value);
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
    } else {
      if (number > 0 && number <= 100) {
        this.setState({
          validate: true
        });
      } else {
        this.setState({
          message: this.getValidateMessage(number),
          validate: false
        });
        return false;
      }
    }
  };

  onChange = (value: string) => {
    this.setState({
      value
    });
    this.isValidate(value);
  };
  onSubmit = () => {
    const { value, validate, message } = this.state;
    this.setState({
      value: "",
      message: ""
    });
    validate
      ? this.props.drawPattern(parseFloat(value))
      : alert(`${message}
다시 입력해주세요.
    `);
  };
  render() {
    const { value, message } = this.state;
    return (
      <React.Fragment>
        <Form
          value={value}
          handleChange={this.onChange}
          handleSubmit={this.onSubmit}
        />
        <Message message={message} />
      </React.Fragment>
    );
  }
}
