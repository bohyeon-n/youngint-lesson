import * as React from "react";

export interface InputProps {
  readonly value: any;
  readonly handleChange: Function;
  readonly name: string;
  readonly active: boolean;
}

export class Input extends React.Component<InputProps, {}> {
  render() {
    const { value, handleChange, name, active } = this.props;
    return (
      <React.Fragment>
        <input
          type="text"
          name={name}
          value={value}
          onChange={e => {
            handleChange(e.target.value);
          }}
          ref={input => input && active && input.focus()}
        />
      </React.Fragment>
    );
  }
}
