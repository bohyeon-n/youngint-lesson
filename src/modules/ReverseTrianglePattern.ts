import BaseShapePattern from "../modules/BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class ReverseTrianglePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  public countShapesInLines = (shapeCount: number): number[] => {
    const array: Array<number> = [];

    for (let i = 0; i < shapeCount; i++) {
      array.push(i);
    }
    return array.reverse();
  };
  createPattern = (number: number, shape: string): Array<string> => {
    const pattern = Patterns.Diamond;
    const shapeArray = this.countShapesInLines(number);
    const patterns: Array<string> = [];

    shapeArray.map((shapeCount, index) =>
      patterns.push(
        this.drawPatternLine(shapeCount + 1, shape, pattern, number, index)
      )
    );

    return patterns;
  };

  createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    return blankInLine + shapesInLine;
  };
  draw = () => {
    return this.createPattern(this.totalNumber, this.shape);
  };
}
