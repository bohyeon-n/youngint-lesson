import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class DiamondShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = (): number[] => {
    const { totalNumber } = this;
    let array: Array<number> = [];
    let i: number = 0;
    while (i < totalNumber) {
      array.push(i);
      i += 2;
    }
    return [...array, ...[...array.slice(0, -1)].reverse()];
  };

  protected createPatternLine = (
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

  draw = () => {
    return this.createPattern();
  };
}
