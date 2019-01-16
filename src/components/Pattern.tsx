import * as React from "react";

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
    totalNumber: number
  ): string => {
    let string: string = "";
    if (pattern === "triangle") {
      for (let i: number = 0; i < n; i++) {
        string += shape;
      }
    } else if (pattern === "reverseTriangle") {
      for (let i: number = totalNumber - n; i > 0; i--) {
        string += " ";
      }
      for (let i: number = n; i > 0; i--) {
        string += shape;
      }
    } else {
      // diamond
    }
    return string;
  };

  createArray = (n: number, pattern: string): number[] => {
    const array: Array<number> = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return pattern === "reverseTriangle" ? array.reverse() : array;
  };

  render() {
    const { number, shape, pattern } = this.props;
    const arr: Array<any> = this.createArray(number, pattern);

    return (
      <div>
        {arr.map(n => (
          <div key={n}>
            {this.drawPatternLine(n + 1, shape, pattern, number)}
          </div>
        ))}
      </div>
    );
  }
}
