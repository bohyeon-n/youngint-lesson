import BaseShapePattern from "../modules/BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class ReverseTrianglePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = (totalNumber: number): number[] => {
    return new Array(totalNumber)
      .fill("")
      .map((i, index) => index)
      .reverse();
  };
  protected createPattern = (number: number, shape: string): Array<string> => {
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

  protected createPatternLine = (
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
