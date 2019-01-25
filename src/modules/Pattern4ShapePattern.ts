import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class Pattern4ShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  countShapesInLines = (totalNumber = this.totalNumber): number[] => {
    let array: Array<number> = [];
    for (let i = 0; i < totalNumber; i++) {
      array.push(totalNumber - 1);
    }
    return array;
  };
  countBlanksInLine = (
    shapeCount: number,
    totalNumber: number,
    index: number
  ): number => {
    return shapeCount - 1;
  };

  createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    const blankLength = blankInLine.length;
    return (
      blankInLine.slice(0, blankLength - index) +
      shapesInLine +
      (index !== 0 ? blankInLine.slice(-index) : "")
    );
  };

  createPattern = (number: number, shape: string): Array<string> => {
    const pattern = Patterns.Pattern4;
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
