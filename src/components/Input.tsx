import * as React from "react";

export interface InputProps {
  value: any;
  handleChange: Function;
  name: string;
}

export class Input extends React.Component<InputProps, {}> {
  render() {
    const { value, handleChange, name } = this.props;
    return (
      <React.Fragment>
        <input
          type="text"
          name={name}
          value={value}
          onChange={e => {
            handleChange(e.target.value);
          }}
        />
      </React.Fragment>
    );
  }
}
