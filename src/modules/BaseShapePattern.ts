export default class BaseShapePattern {
  protected totalNumber: number;
  protected shape: string;

  protected constructor(totalNumber: number, shape: string) {
    this.totalNumber = totalNumber;
    this.shape = shape;
  }

  protected countBlanksInLine = (
    shapeCount: number,
    totalNumber: number,
    index: number
  ): number => {
    return totalNumber - shapeCount;
  };

  private repeatCharacterNTimes = (character: string, number: number) => {
    return character.repeat(number);
  };

  protected countShapesInLines = (totalNumber: number): number[] => {
    return new Array(totalNumber).fill("").map((i, index) => index);
  };

  protected createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    return shapesInLine + blankInLine;
  };

  protected drawPatternLine = (
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
