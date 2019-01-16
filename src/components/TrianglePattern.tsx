import * as React from "react";

export interface TrianglePatternProps {
  readonly number: number;
  readonly shape: string;
  readonly pattern: string;
}

export class TrianglePattern extends React.Component<TrianglePatternProps, {}> {
  drawPatternLine = (n: number, shape: string): string => {
    let string: string = "";
    for (let i: number = 0; i < n; i++) {
      string += shape;
    }
    return string;
  };

  createArray = (n: number): number[] => {
    const array: Array<number> = [];
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    return array;
  };

  render() {
    const { number, shape } = this.props;
    const arr: Array<any> = this.createArray(number);

    return (
      <div>
        {arr.map(n => (
          <div key={n}>{this.drawPatternLine(n + 1, shape)}</div>
        ))}
      </div>
    );
  }
}
