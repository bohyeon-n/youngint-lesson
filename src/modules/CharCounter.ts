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

  countShapesInLines = (shapeCount: number, pattern: string): number[] => {
    let array: Array<number> = [];
    if (pattern === Patterns.Diamond) {
      let i: number = 0;
      while (i < shapeCount) {
        array.push(i);
        i += 2;
      }
      return [...array, ...[...array.slice(0, -1)].reverse()];
    } else if (pattern === Patterns.Pattern4) {
      for (let i = 0; i < shapeCount; i++) {
        array.push(shapeCount - 1);
      }
      return array;
    } else {
      for (let i = 0; i < shapeCount; i++) {
        array.push(i);
      }
      array =
        Patterns.ReverseTriangle === pattern || Patterns.Pattern5 === pattern
          ? array.reverse()
          : array;

      return array;
    }
  };
}
