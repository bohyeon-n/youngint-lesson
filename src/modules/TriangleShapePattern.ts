import BaseShapePattern from "./BaseShapePattern";
import CharCounter from "./CharCounter";
import Patterns from "../utils/Patterns";

export default class TriangleShapePattern extends BaseShapePattern {
  totalNumber: number;
  shape: string;

  constructor(totalNumber: number, shape: string) {
    super(new CharCounter());
    this.totalNumber = totalNumber;
    this.shape = shape;
  }
  createPattern = (number: number, shape: string): Array<string> => {
    const pattern = Patterns.Triangle;
    const shapeArray = this.CharCounter.countShapesInLines(number, pattern);
    const patterns: Array<string> = [];

    shapeArray.map((shapeCount, index) =>
      patterns.push(
        this.drawPatternLine(shapeCount + 1, shape, pattern, number, index)
      )
    );

    return patterns;
  };

  draw = () => {
    return this.createPattern(this.totalNumber, this.shape);
  };
}
