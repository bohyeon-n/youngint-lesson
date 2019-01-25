import * as React from "react";

import Patterns from "../utils/Patterns";
import TriangleShapePattern from "../modules/TriangleShapePattern";
import DiamondShapePattern from "../modules/DiamondShapePattern";
import ReverseTrianglePattern from "../modules/ReverseTrianglePattern";
import Pattern4ShapePattern from "../modules/Pattern4ShapePattern";
import Pattern5ShapePattern from "../modules/Pattern5ShapePattern";
import IBaseShapePattern from "../modules/BaseShapePattern";

export interface PatternProps {
  readonly number: number;
  readonly shape: string;
  readonly pattern: string;
}

export class Pattern extends React.Component<PatternProps, {}> {
  render() {
    const { number, shape, pattern } = this.props;
    let patterns: Array<string> = [];
    let basePattern: IBaseShapePattern;

    switch (pattern) {
      case Patterns.Triangle:
        basePattern = new TriangleShapePattern(number, shape);
        break;
      case Patterns.ReverseTriangle:
        basePattern = new ReverseTrianglePattern(number, shape);
        break;
      case Patterns.Diamond:
        basePattern = new DiamondShapePattern(number, shape);
        break;
      case Patterns.Pattern4:
        basePattern = new Pattern4ShapePattern(number, shape);
        break;
      case Patterns.Pattern5:
        basePattern = new Pattern5ShapePattern(number, shape);
        break;
    }
    patterns = basePattern.draw();

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
