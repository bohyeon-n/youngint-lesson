import * as React from "react";

export interface TrianglePatternProps {
  number: number;
  pattern: string;
}

export class TrianglePattern extends React.Component<TrianglePatternProps, {}> {
  drawPatternLine = (n: number, pattern: string): string => {
    let string: string = "";
    for (let i: number = 0; i < n; i++) {
      string += pattern;
    }
    return string;
  };

  createArray = (n: number): string[] => {
    const array: Array<any> = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  };

  render() {
    const { number, pattern } = this.props;
    const arr: Array<any> = this.createArray(number);

    return (
      <div>
        {arr.map(n => (
          <div key={n}>{this.drawPatternLine(n + 1, pattern)}</div>
        ))}
      </div>
    );
  }
}
