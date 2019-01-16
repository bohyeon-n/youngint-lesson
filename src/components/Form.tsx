import * as React from "react";
import { Input } from "../components/Input";

export interface FormProps {
  readonly number: string;
  readonly handleNumberChange: Function;
  readonly handlePatternChange: Function;
  readonly handleSubmit: Function;
  readonly shape: string;
}

export class Form extends React.Component<FormProps, {}> {
  render() {
    const {
      number,
      shape,
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
            Shape:
            <Input
              value={shape}
              handleChange={handlePatternChange}
              name={"shape"}
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
