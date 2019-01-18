import * as React from "react";

export interface InputProps {
  readonly value: any;
  readonly onInputChange: Function;
  readonly name: string;
  readonly active: boolean;
  readonly onSubmit: Function;
}

export class Input extends React.Component<InputProps, {}> {
  render() {
    const { value, onInputChange, name, active, onSubmit } = this.props;
    return (
      <React.Fragment>
        <input
          type="text"
          name={name}
          value={value}
          onChange={e => {
            onInputChange(e.target.value);
          }}
          onKeyPress={e => e.key == "Enter" && onSubmit()}
          ref={input => input && active && input.focus()}
        />
      </React.Fragment>
    );
  }
}
