import * as React from "react";
import { Input } from "../components/Input";

export interface FormProps {
  readonly number: string;
  readonly handleNumberChange: Function;
  readonly handlePatternChange: Function;
  readonly handleSubmit: Function;
  readonly shape: string;
  readonly step: number;
  readonly handleChangeStep: Function;
}

export class Form extends React.Component<FormProps, {}> {
  render() {
    const {
      number,
      shape,
      handleNumberChange,
      handlePatternChange,
      handleSubmit,
      handleChangeStep,
      step
    } = this.props;
    return (
      <div className="form">
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label>
            Shape:
            <Input
              value={shape}
              handleChange={handlePatternChange}
              name={"shape"}
              active={step === 1}
              handleChangeStep={handleChangeStep}
              step={1}
            />
          </label>
          <label>
            Number:
            <Input
              name={"number"}
              value={number}
              handleChange={handleNumberChange}
              active={false}
              handleChangeStep={handleChangeStep}
              step={2}
            />
          </label>
          <button>패턴 그리기</button>
        </form>
      </div>
    );
  }
}
