import * as React from "react";

export class Input extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form>
          <label>
            Number:
            <input type="text" name="number" />
          </label>
        </form>
      </React.Fragment>
    );
  }
}
