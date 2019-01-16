import * as React from "react";
import { Input } from "../components/Input";

export interface FormProps {
  readonly number: string;
  readonly handleNumberChange: Function;
  readonly handlePatternChange: Function;
  readonly handleSubmit: Function;
  readonly shape: string;
  readonly step: number;
}

export class Form extends React.Component<FormProps, {}> {
  render() {
    const {
      number,
      shape,
      handleNumberChange,
      handlePatternChange,
      handleSubmit,
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
              active={step > 0}
            />
          </label>
          <label>
            Number:
            <Input
              name={"number"}
              value={number}
              handleChange={handleNumberChange}
              active={false}
            />
          </label>
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
