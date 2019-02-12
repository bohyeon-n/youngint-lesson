// 출력 예시
//     *****
//    ****
//   ***
//  **
// *

import BaseShapePattern from "./BaseShapePattern";

export default class Pattern5ShapePattern extends BaseShapePattern {
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

  protected countBlanksInLine = (shapeCount: number, index: number): number => {
    const { totalNumber } = this;
    return totalNumber - 1 + index;
  };

  protected combineShapesBlanks = (
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
}
