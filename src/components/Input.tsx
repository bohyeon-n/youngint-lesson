import * as React from "react";

export interface InputProps {
  readonly value: any;
  readonly handleChange: Function;
  readonly name: string;
  readonly active: boolean;
  readonly handleChangeStep: Function;
  readonly step: number;
}

export class Input extends React.Component<InputProps, {}> {
  render() {
    const {
      value,
      handleChange,
      name,
      active,
      handleChangeStep,
      step
    } = this.props;
    return (
      <React.Fragment>
        <input
          type="text"
          name={name}
          value={value}
          onChange={e => {
            handleChange(e.target.value);
            handleChangeStep(step);
          }}
          ref={input => input && active && input.focus()}
        />
      </React.Fragment>
    );
  }
}
