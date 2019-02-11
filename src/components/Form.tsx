import * as React from "react";

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
  readonly pattern?: string;
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
            <input
              type={type || "text"}
              min={min}
              max={max}
              name={name}
              value={value}
              onChange={e => handleInputChange(e.target.value)}
              onKeyPress={e => e.key == "Enter" && onSubmit()}
              ref={input => input && focus && input.focus()}
            />
          </label>
        </form>
      </div>
    );
  }
}
