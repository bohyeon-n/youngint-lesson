import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class Pattern6ShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = (totalNumber: number = this.totalNumber) => {
    let array: any = [];
    new Array(totalNumber)
      .fill("")
      .map((i, index) => index + 1)
      .map(lineNumber => {
        array.push([
          ...new Array(lineNumber).fill("").map((line, index) => index)
        ]);
      });

    return array;
  };

  protected createPattern = (pattern: string) => {
    const number = this.totalNumber;
    const shape = this.shape;
    const shapeArray = this.countShapesInLines(number);
    const patterns: Array<string> = [];

    shapeArray.map((section: number[], index: number) =>
      section.map((shapeCount: number, index: number) => {
        patterns.push(
          this.drawPatternLine(shapeCount + 1, shape, pattern, number, index)
        );
        patterns.push(this.repeatCharacterNumberTimes(" ", number));
      })
    );

    return patterns;
  };

  draw = () => {
    return this.createPattern(Patterns.Pattern6);
  };
}
