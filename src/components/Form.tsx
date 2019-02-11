import * as React from "react";
import { Input } from "../components/Input";

export interface FormProps {
  readonly handleInputChange: Function;
  readonly value: string;
  readonly focus: boolean;
  readonly labelName: string;
  readonly onSubmit: Function;
  readonly name?: string;
  readonly min?: string;
  readonly max?: string;
  readonly type?: string;
}

export class Form extends React.Component<FormProps, {}> {
  render() {
    const {
      value,
      handleInputChange,
      labelName,
      focus,
      onSubmit,
      type,
      min,
      max
    } = this.props;
    return (
      <div className="form">
        <form onSubmit={e => e.preventDefault()}>
          <label>
            {`${labelName}:`}
            <Input
              type={type}
              min={min}
              max={max}
              onSubmit={onSubmit}
              value={value}
              onInputChange={handleInputChange}
              name={name}
              active={focus}
            />
          </label>
        </form>
      </div>
    );
  }
}
