import Patterns from "../utils/Patterns";
import CharCounter from "../modules/CharCounter";

export default class BaseShapePattern {
  CharCounter: CharCounter;

  constructor(CharCounter: CharCounter) {
    this.CharCounter = CharCounter;
  }

  createShapesOfNumber = (character: string, number: number) => {
    let string: string = "";
    for (let i: number = 0; i < number; i++) {
      string += character;
    }
    return string;
  };

  createPatternLine = (
    pattern: string,
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    let line: string = "";
    switch (pattern) {
      case Patterns.Triangle:
        line = shapesInLine + blankInLine;
        break;
      case Patterns.ReverseTriangle:
        line = blankInLine + shapesInLine;
        break;
      case Patterns.Diamond:
        const centerIndex = blankInLine.length / 2;
        line =
          blankInLine.slice(0, centerIndex) +
          shapesInLine +
          blankInLine.slice(centerIndex, blankInLine.length);
        break;
      case Patterns.Pattern4:
        const blankLength = blankInLine.length;
        line =
          blankInLine.slice(0, blankLength - index) +
          shapesInLine +
          (index !== 0 ? blankInLine.slice(-index) : "");
        break;
      case Patterns.Pattern5:
        line =
          blankInLine.slice(0, blankInLine.length - 2 * index) +
          shapesInLine +
          (index !== 0 ? blankInLine.slice(-2 * index) : "");
    }
    return line;
  };

  drawPatternLine = (
    shapeCount: number,
    shape: string,
    pattern: string,
    totalNumber: number,
    index: number
  ) => {
    const shapeInLine = this.createShapesOfNumber(shape, shapeCount);
    const blankInLine = this.createShapesOfNumber(
      " ",
      this.CharCounter.countBlanksInLine(
        shapeCount,
        pattern,
        totalNumber,
        index
      )
    );
    const patternLine = this.createPatternLine(
      pattern,
      index,
      shapeInLine,
      blankInLine
    );

    return patternLine;
  };
}
