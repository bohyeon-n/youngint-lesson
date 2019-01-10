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
    function createArray(n: number) {
      const array: Array<any> = [];
      for (let i = 0; i < n; i++) {
        array.push(i);
      }
      return array;
    }
    let arr: Array<any> = createArray(this.props.number);

    return (
      <div>
        {arr.map(n => (
          <div key={n}>{this.drawPatternLine(n + 1, this.props.pattern)}</div>
        ))}
      </div>
    );
  }
}
