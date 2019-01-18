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
    } else if (pattern === "pattern4") {
      // pattern4
      let stringLine = "";
      let blankLine = "";
      for (let i: number = 0; i < totalNumber; i++) {
        stringLine += shape;
      }
      for (let i: number = 0; i < totalNumber + (totalNumber - 1); i++) {
        blankLine += " ";
      }
      string =
        blankLine.slice(n, blankLine.length - n) +
        stringLine +
        blankLine.slice(-n);
    } else {
      //diamond
      let blank: string = "";
      let pattern: string = "";
      for (let i = 0; i < totalNumber - n; i++) {
        blank += " ";
      }
      for (let i = 0; i < n; i++) {
        pattern += shape;
      }
      string =
        blank.slice(0, blank.length / 2) +
        pattern +
        blank.slice(blank.length / 2, blank.length);
    }
    return string;
  };

  createArray = (n: number, pattern: string): number[] => {
    const array: Array<number> = [];
    if (pattern === "diamond") {
      let i: number = 0;
      while (i < n) {
        array.push(i);
        i += 2;
      }
      return [...array, ...[...array.slice(0, -1)].reverse()];
    } else {
      for (let i = 0; i < n; i++) {
        array.push(i);
      }
    }
    return pattern === "reverseTriangle" ? array.reverse() : array;
  };

  render() {
    const { number, shape, pattern } = this.props;
    const arr: Array<any> = this.createArray(number, pattern);
    return (
      <div style={{ whiteSpace: "pre" }} className={`pattern ${pattern}`}>
        {arr.map((n, index) => (
          <div key={index} className={pattern}>
            {this.drawPatternLine(n + 1, shape, pattern, number)}
          </div>
        ))}
      </div>
    );
  }
}
