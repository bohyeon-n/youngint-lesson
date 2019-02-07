import BaseShapePattern from "../modules/BaseShapePattern";

export default class ReverseTrianglePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = (): number[] => {
    const { totalNumber } = this;
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
}
