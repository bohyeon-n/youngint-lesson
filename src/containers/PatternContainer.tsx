import * as React from "react";
import { Pattern } from "../components/Pattern";
import Patterns from "../utils/Patterns";
import TriangleShapePattern from "../modules/TriangleShapePattern";
import DiamondShapePattern from "../modules/DiamondShapePattern";
import ReverseTrianglePattern from "../modules/ReverseTrianglePattern";
import Pattern4ShapePattern from "../modules/Pattern4ShapePattern";
import Pattern5ShapePattern from "../modules/Pattern5ShapePattern";
import Pattern6ShapePattern from "../modules/Pattern6ShapePattern";
import Pattern7ShapePattern from "../modules/Pattern7ShapePattern";
import Pattern6RandomShapePattern from "../modules/Pattern6RandomShapePattern";
import Pattern7RandomShapePattern from "../modules/Pattern7RandomShapePattern";

export interface PatternProps {
  readonly number: number;
  readonly shape: string;
  readonly pattern: string;
}

export class PatternContainer extends React.Component<PatternProps, {}> {
  pattern = {
    number: 0,
    shape: "",
    pattern: "",
    patterns: [""]
  };

  generatePatternClass = (
    number: number,
    shape: string,
    pattern: string
  ): string[] => {
    let patterns: Array<string> = [];

    switch (pattern) {
      case Patterns.Triangle:
        patterns = new TriangleShapePattern(number, shape).draw();
        break;
      case Patterns.ReverseTriangle:
        patterns = new ReverseTrianglePattern(number, shape).draw();
        break;
      case Patterns.Diamond:
        patterns = new DiamondShapePattern(number, shape).draw();
        break;
      case Patterns.Pattern4:
        patterns = new Pattern4ShapePattern(number, shape).draw();
        break;
      case Patterns.Pattern5:
        patterns = new Pattern5ShapePattern(number, shape).draw();
        break;
      case Patterns.Pattern6:
        patterns = new Pattern6ShapePattern(number, shape).draw();
        break;
      case Patterns.Pattern7:
        patterns = new Pattern7ShapePattern(number, shape).draw();
        break;
      case Patterns.Pattern6Random:
        patterns = new Pattern6RandomShapePattern(number, shape).draw();
        break;
      case Patterns.Pattern7Random:
        patterns = new Pattern7RandomShapePattern(number, shape).draw();
        break;
    }
    return patterns;
  };
  render() {
    const { number, shape, pattern } = this.props;

    if (
      this.pattern.shape === "" ||
      this.pattern.number !== number ||
      this.pattern.shape !== shape ||
      this.pattern.pattern !== pattern
    ) {
      this.pattern = {
        number,
        shape,
        pattern,
        patterns: this.generatePatternClass(number, shape, pattern)
      };
    }

    return <Pattern patterns={this.pattern.patterns} />;
  }
}
