import * as React from "react";
import { Input } from "../components/Input";

export interface FormProps {
  readonly handleInputChange: Function;
  readonly value: string;
  readonly focus: boolean;
  readonly labelName: string;
  readonly onSubmit: Function;
  readonly pattern?: any;
  readonly name?: string;
}

export class Form extends React.Component<FormProps, {}> {
  render() {
    const { value, handleInputChange, labelName, focus, onSubmit } = this.props;
    return (
      <div className="form">
        <form onSubmit={e => e.preventDefault()}>
          <label>
            {`${labelName}:`}
            <Input
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
