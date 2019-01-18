import * as React from "react";

export interface ErrorProps {
  readonly message: string;
  readonly alert: boolean;
}

export class Message extends React.Component<ErrorProps, {}> {
  render() {
    const { message } = this.props;
    return (
      <div className="message">
        <div className={this.props.alert ? "alert" : ""}>{message}</div>
      </div>
    );
  }
}
