import Patterns from "../utils/Patterns";

export default class CharCounter {
  countBlanksInLine = (
    shapeCount: number,
    pattern: string,
    totalNumber: number,
    index: number
  ): number => {
    let blankCount = 0;

    switch (pattern) {
      case Patterns.Pattern4:
        blankCount = shapeCount - 1;
        break;
      case Patterns.Pattern5:
        blankCount = totalNumber - 1 + index;
        break;
      default:
        blankCount = totalNumber - shapeCount;
    }

    return blankCount;
  };

  countShapesInLines = (shapeCount: number): number[] => {
    let array: Array<number> = [];

    for (let i = 0; i < shapeCount; i++) {
      array.push(i);
    }

    return array;
  };
}
