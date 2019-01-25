import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class Pattern5ShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = (totalNumber = this.totalNumber): number[] => {
    return new Array(totalNumber)
      .fill("")
      .map((i, index) => index)
      .reverse();
  };

  protected countBlanksInLine = (
    shapeCount: number,
    totalNumber: number,
    index: number
  ): number => {
    return totalNumber - 1 + index;
  };

  protected createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    return (
      blankInLine.slice(0, blankInLine.length - 2 * index) +
      shapesInLine +
      (index !== 0 ? blankInLine.slice(-2 * index) : "")
    );
  };

  protected createPattern = (number: number, shape: string): Array<string> => {
    const pattern = Patterns.Pattern5;
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
