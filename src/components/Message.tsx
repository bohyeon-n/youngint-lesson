import * as React from "react";

export interface ErrorProps {
  message: string;
}

export class Message extends React.Component<ErrorProps, {}> {
  render() {
    const { message } = this.props;
    return <div>{message}</div>;
  }
}