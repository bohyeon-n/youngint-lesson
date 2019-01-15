import * as React from "react";

export interface FormProps {
  number: string;
  handleNumberChange: Function;
  handlePatternChange: Function;
  handleSubmit: Function;
  pattern: string;
}
export class Form extends React.Component<FormProps, {}> {
  render() {
    const {
      number,
      pattern,
      handleNumberChange,
      handlePatternChange,
      handleSubmit
    } = this.props;
    return (
      <React.Fragment>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label>
            Pattern:
            <input
              type="text"
              name="pattern"
              value={pattern}
              onChange={e => {
                handlePatternChange(e.target.value);
              }}
            />
          </label>
          <label>
            Number:
            <input
              type="text"
              name="number"
              value={number}
              onChange={e => {
                handleNumberChange(e.target.value);
              }}
            />
          </label>
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
