import * as React from "react";

export interface InputProps {
  readonly value: string | number;
  readonly onInputChange: Function;
  readonly name: string;
  readonly active: boolean;
  readonly onSubmit: Function;
  readonly type?: string;
  readonly min?: string;
  readonly max?: string;
}

export class Input extends React.Component<InputProps, {}> {
  render() {
    const {
      value,
      onInputChange,
      name,
      active,
      onSubmit,
      type,
      min,
      max
    } = this.props;
    return (
      <React.Fragment>
        <input
          type={type || "text"}
          min={min}
          max={max}
          name={name}
          value={value}
          onChange={e => onInputChange(e.target.value)}
          onKeyPress={e => e.key == "Enter" && onSubmit()}
          ref={input => input && active && input.focus()}
        />
      </React.Fragment>
    );
  }
}
