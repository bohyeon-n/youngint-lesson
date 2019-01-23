import * as React from "react";

import {
  makeShapeAndBlank,
  combineShapeAndBlank,
  numberOfShapeInLine
} from "../utils/drawPattern";

export interface PatternProps {
  readonly number: number;
  readonly shape: string;
  readonly pattern: string;
}

export class Pattern extends React.Component<PatternProps, {}> {
  drawPatternLine = (
    n: number,
    shape: string,
    pattern: string,
    totalNumber: number,
    index: number
  ): string => {
    const { shapesInLine, blankInLine } = makeShapeAndBlank(
      n,
      shape,
      pattern,
      totalNumber,
      index
    );
    return combineShapeAndBlank(pattern, index, shapesInLine, blankInLine);
  };

  render() {
    const { number, shape, pattern } = this.props;
    const arr: Array<any> = numberOfShapeInLine(number, pattern);
    return (
      <div
        style={{ whiteSpace: "pre" }}
        className={`pattern ${String(pattern)}`}
      >
        {arr.map((n, index) => (
          <div key={index} className={String(pattern)}>
            {this.drawPatternLine(n + 1, shape, pattern, number, index)}
          </div>
        ))}
      </div>
    );
  }
}
