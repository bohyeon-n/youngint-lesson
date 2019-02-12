import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
export interface ErrorProps {
  readonly message: string;
  readonly alert: boolean;
}

export class Message extends React.Component<ErrorProps, {}> {
  render() {
    const { message, alert } = this.props;
    return (
      <div className="message">
        {message !== "" && (
          <div>
            {alert ? (
              <FontAwesomeIcon icon="exclamation-triangle" className="icon" />
            ) : null}
            {message}
          </div>
        )}
      </div>
    );
  }
}
