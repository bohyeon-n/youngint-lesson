import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class DiamondShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  countShapesInLines = (totalNumber = this.totalNumber): number[] => {
    let array: Array<number> = [];
    let i: number = 0;
    while (i < totalNumber) {
      array.push(i);
      i += 2;
    }
    return [...array, ...[...array.slice(0, -1)].reverse()];
  };

  createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    const centerIndex = blankInLine.length / 2;
    return (
      blankInLine.slice(0, centerIndex) +
      shapesInLine +
      blankInLine.slice(centerIndex, blankInLine.length)
    );
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

  draw = () => {
    return this.createPattern(this.totalNumber, this.shape);
  };
}
