import CharCounter from "./CharCounter";


class BaseShapePattern {
  protected charCounter: CharCounter;

  constructor(charCounter: CharCounter) {
    this.charCounter = charCounter;
  }

  private createPatternLine = (
    pattern: string,
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    let line: string = "";
    return line = shapesInLine + blankInLine;;
  };
  
  
  private createShapesOfNumber = (character: string, number: number) => {
    let string: string = "";
    for (let i: number = 0; i < number; i++) {
      string += character;
    }
    return string;
  };
  
  
  protected drawPatternLine = (
    shapeCount: number,
    shape: string,
    pattern: string,
    totalNumber: number,
    index: number
  ) => {
    const shapeInLine = this.createShapesOfNumber(shape, shapeCount);
    const blankInLine = this.createShapesOfNumber(
      " ",
      this.charCounter.countBlanksInLine(shapeCount, pattern, totalNumber, index)
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


export default BaseShapePattern;