import * as React from "react";

import { createPattern } from "../utils/drawPattern";

export interface PatternProps {
  readonly number: number;
  readonly shape: string;
  readonly pattern: string;
}

export class Pattern extends React.Component<PatternProps, {}> {
  render() {
    const { number, shape, pattern } = this.props;
    const patterns = createPattern(number, shape, pattern);

    return (
      <div
        style={{ whiteSpace: "pre" }}
        className={`pattern ${String(pattern)}`}
      >
        {patterns.map((patternLine, index) => (
          <div key={index} className={String(pattern)}>
            {patternLine}
          </div>
        ))}
      </div>
    );
  }
}
