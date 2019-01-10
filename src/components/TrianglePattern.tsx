import * as React from "react";

export interface TrianglePatternProps {
  number: number;
  pattern: string;
}

export class TrianglePattern extends React.Component<TrianglePatternProps, {}> {
  drawPatternLine = (n: number, pattern: string) => {
    let string: string = "";
    for (let i: number = 0; i < n; i++) {
      string += pattern;
    }
    return string;
  };

  render() {
    const { number, pattern } = this.props;
    function createArray(n: number) {
      const array: Array<any> = [];
      for (let i = 0; i < n; i++) {
        array.push(i);
      }
      return array;
    }
    const arr: Array<any> = createArray(number);

    return (
      <div>
        {arr.map(n => (
          <div key={n}>{this.drawPatternLine(n + 1, pattern)}</div>
        ))}
      </div>
    );
  }
}
