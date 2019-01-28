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

  protected createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    return blankInLine + shapesInLine;
  };

  draw = () => {
    return this.createPattern(
      this.totalNumber,
      this.shape,
      Patterns.ReverseTriangle
    );
  };
}
