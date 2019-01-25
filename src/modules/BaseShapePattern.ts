export default class BaseShapePattern {
  totalNumber: number;
  shape: string;
  constructor(totalNumber: number, shape: string) {
    this.totalNumber = totalNumber;
    this.shape = shape;
  }
  countBlanksInLine = (
    shapeCount: number,
    totalNumber: number,
    index: number
  ): number => {
    return totalNumber - shapeCount;
  };

  repeatCharacterNTimes = (character: string, number: number) => {
    return character.repeat(number);
  };

  countShapesInLines = (totalNumber: number): number[] => {
    return new Array(totalNumber).fill("").map((i, index) => index);
  };

  createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    return shapesInLine + blankInLine;
  };

  drawPatternLine = (
    shapeCount: number,
    shape: string,
    pattern: string,
    totalNumber: number,
    index: number
  ) => {
    const shapeInLine = this.repeatCharacterNTimes(shape, shapeCount);
    const blankInLine = this.repeatCharacterNTimes(
      " ",
      this.countBlanksInLine(shapeCount, totalNumber, index)
    );
    const patternLine = this.createPatternLine(index, shapeInLine, blankInLine);

    return patternLine;
  };
}
