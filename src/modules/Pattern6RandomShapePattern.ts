import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";
import { shuffleArray } from "../utils/shuffleArray";
import Pattern6ShapePattern from "../modules/Pattern6ShapePattern";
export default class Pattern6RandomShapePattern extends Pattern6ShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = () => {
    const { totalNumber } = this;
    let array: any = [];
    new Array(totalNumber)
      .fill("")
      .map((i, index) => index + 1)
      .map(lineNumber => {
        array.push([
          ...new Array(lineNumber).fill("").map((line, index) => index)
        ]);
      });

    return shuffleArray(array);
  };
}
