import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class Pattern7ShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected createPattern = () => {
    const number = this.totalNumber;
    const shapeArray = new Array(number).fill("");
    const patterns: Array<string> = [];
    const shape = this.shape;

    shapeArray.map((content, index) => {
      const previousBlank = this.repeatCharacterNumberTimes(
        this.repeatCharacterNumberTimes(" ", number),
        index
      );
      let line: string;
      line =
        this.repeatCharacterNumberTimes(shape, index + 1) +
        this.repeatCharacterNumberTimes(" ", number - (index + 1));

      line = this.repeatCharacterNumberTimes(line, number - index);
      patterns.push(previousBlank + line);
    });

    return patterns;
  };
}
