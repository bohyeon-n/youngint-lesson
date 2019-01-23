import * as React from "react";
import Patterns from "../utils/Patterns";

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
    let string: string = "";
    let shapesInLine: string = "";
    let blankInLine: string = "";
    // 모양
    for (let i: number = 0; i < n; i++) {
      shapesInLine += shape;
    }
    // 공백
    if (pattern === Patterns.Pattern4) {
      for (let i: number = 0; i < n - 1; i++) {
        blankInLine += " ";
      }
    } else if (pattern === Patterns.Pattern5) {
      for (let i: number = 0; i < totalNumber - 1 + index; i++) {
        blankInLine += " ";
      }
    } else {
      for (let i: number = 0; i < totalNumber - n; i++) {
        blankInLine += " ";
      }
    }
    if (pattern === Patterns.Triangle) {
      string = shapesInLine + blankInLine;
    } else if (pattern === Patterns.ReverseTriangle) {
      string = blankInLine + shapesInLine;
    } else if (pattern === Patterns.Diamond) {
      //diamond
      const centerIndex = blankInLine.length / 2;
      string =
        blankInLine.slice(0, centerIndex) +
        shapesInLine +
        blankInLine.slice(centerIndex, blankInLine.length);
    } else if (pattern === Patterns.Pattern4) {
      // pattern4
      const blankLength = blankInLine.length;
      string =
        blankInLine.slice(0, blankLength - index) +
        shapesInLine +
        blankInLine.slice(-index);
    } else if (pattern === Patterns.Pattern5) {
      // pattern5
      string =
        blankInLine.slice(0, blankInLine.length - 2 * index) +
        shapesInLine +
        blankInLine.slice(-2 * index);
    }
    return string;
  };

  numberOfShapeInLine = (n: number, pattern: string): number[] => {
    let array: Array<number> = [];
    if (pattern === Patterns.Diamond) {
      let i: number = 0;
      while (i < n) {
        array.push(i);
        i += 2;
      }
      return [...array, ...[...array.slice(0, -1)].reverse()];
    } else if (pattern === Patterns.Pattern4) {
      for (let i = 0; i < n; i++) {
        array.push(n);
      }
      return array;
    } else {
      for (let i = 0; i < n; i++) {
        array.push(i);
      }
      array =
        Patterns.ReverseTriangle === pattern || Patterns.Pattern5 === pattern
          ? array.reverse()
          : array;
      return array;
    }
  };

  render() {
    const { number, shape, pattern } = this.props;
    const arr: Array<any> = this.numberOfShapeInLine(number, pattern);
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
