import BaseShapePattern from "./BaseShapePattern";

export default class Pattern4ShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = (): number[] => {
    const { totalNumber } = this;
    return new Array(totalNumber).fill(totalNumber - 1);
  };

  protected countBlanksInLine = (shapeCount: number, index: number): number => {
    return shapeCount - 1;
  };

  protected createPatternLine = (
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
}
