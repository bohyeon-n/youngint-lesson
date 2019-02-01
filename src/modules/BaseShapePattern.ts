abstract class BaseShapePattern {
  protected totalNumber: number;
  protected shape: string;

  protected constructor(totalNumber: number, shape: string) {
    this.totalNumber = totalNumber;
    this.shape = shape;
  }

  protected countBlanksInLine = (shapeCount: number, index: number): number => {
    const { totalNumber } = this;
    return totalNumber - shapeCount;
  };

  protected repeatCharacterNumberTimes = (
    character: string,
    number: number
  ) => {
    return character.repeat(number);
  };

  protected countShapesInLines = (): number[] => {
    const { totalNumber } = this;
    return new Array(totalNumber).fill("").map((i, index) => index);
  };

  protected createPatternLine = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    return shapesInLine + blankInLine;
  };

  protected drawPatternLine = (shapeCount: number, index: number) => {
    const { shape, totalNumber } = this;
    const shapeInLine = this.repeatCharacterNumberTimes(shape, shapeCount);
    const blankInLine = this.repeatCharacterNumberTimes(
      " ",
      this.countBlanksInLine(shapeCount, index)
    );
    const patternLine = this.createPatternLine(index, shapeInLine, blankInLine);

    return patternLine;
  };

  protected createPattern = () => {
    const shapeArray = this.countShapesInLines();
    const patterns: Array<string> = [];

    shapeArray.map((shapeCount, index) =>
      patterns.push(this.drawPatternLine(shapeCount + 1, index))
    );

    return patterns;
  };
}

export default BaseShapePattern;
