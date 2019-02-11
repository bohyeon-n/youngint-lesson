import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface ErrorProps {
  readonly message: string;
}

export class Message extends React.Component<ErrorProps, {}> {
  render() {
    const { message } = this.props;
    return (
      <div className="message">
        {message !== "" && (
          <div>
            <FontAwesomeIcon icon="exclamation-triangle" className="icon" />
            {message}
          </div>
        )}
      </div>
    );
  }
}
