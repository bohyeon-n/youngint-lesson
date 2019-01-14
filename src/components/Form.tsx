import * as React from "react";

export interface FormProps {
  value: string;
  handleChange: any;
  handleSubmit: any;
}
export class Form extends React.Component<FormProps, {}> {
  render() {
    const { value, handleChange, handleSubmit } = this.props;
    return (
      <React.Fragment>
        <form
          onSubmit={e => {
            e.preventDefault();
            handleSubmit();
          }}
        >
          <label>
            Number:
            <input
              type="text"
              name="number"
              value={value}
              onChange={e => {
                handleChange(e.target.value);
              }}
            />
          </label>
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
