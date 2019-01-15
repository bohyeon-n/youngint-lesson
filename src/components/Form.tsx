import * as React from "react";
import { Input } from "../components/Input";

export interface FormProps {
  readonly number: string;
  readonly handleNumberChange: Function;
  readonly handlePatternChange: Function;
  readonly handleSubmit: Function;
  readonly pattern: string;
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
            <Input
              value={pattern}
              handleChange={handlePatternChange}
              name={"pattern"}
            />
          </label>
          <label>
            Number:
            <Input
              name={"number"}
              value={number}
              handleChange={handleNumberChange}
            />
          </label>
          <button>Submit</button>
        </form>
      </React.Fragment>
    );
  }
}
