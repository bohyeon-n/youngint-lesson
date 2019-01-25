import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class TriangleShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected createPattern = (number: number, shape: string): Array<string> => {
    const pattern = Patterns.Triangle;
    const shapeArray = this.countShapesInLines(number);
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
