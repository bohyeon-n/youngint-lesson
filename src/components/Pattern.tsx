import * as React from "react";

import { drawPatternLine, createShapesInLines } from "../utils/drawPattern";

export interface PatternProps {
  readonly number: number;
  readonly shape: string;
  readonly pattern: string;
}

export class Pattern extends React.Component<PatternProps, {}> {
  render() {
    const { number, shape, pattern } = this.props;
    const arr: Array<any> = createShapesInLines(number, pattern);
    return (
      <div
        style={{ whiteSpace: "pre" }}
        className={`pattern ${String(pattern)}`}
      >
        {arr.map((n, index) => (
          <div key={index} className={String(pattern)}>
            {drawPatternLine(n + 1, shape, pattern, number, index)}
          </div>
        ))}
      </div>
    );
  }
}
