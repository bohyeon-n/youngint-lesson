import Patterns from "../utils/Patterns";

const createPatternLine = (
  pattern: string,
  index: number,
  shapesInLine: string,
  blankInLine: string
) => {
  let string: string = "";
  switch (pattern) {
    case Patterns.Triangle:
      string = shapesInLine + blankInLine;
      break;
    case Patterns.ReverseTriangle:
      string = blankInLine + shapesInLine;
      break;
    case Patterns.Diamond:
      const centerIndex = blankInLine.length / 2;
      string =
        blankInLine.slice(0, centerIndex) +
        shapesInLine +
        blankInLine.slice(centerIndex, blankInLine.length);
      break;
    case Patterns.Pattern4:
      const blankLength = blankInLine.length;
      string =
        blankInLine.slice(0, blankLength - index) +
        shapesInLine +
        blankInLine.slice(-index);
      break;
    case Patterns.Pattern5:
      string =
        blankInLine.slice(0, blankInLine.length - 2 * index) +
        shapesInLine +
        blankInLine.slice(-2 * index);
  }
  return string;
};

const countBlanksInLine = (
  shapeCount: number,
  pattern: string,
  totalNumber: number,
  index: number
) => {
  // 공백
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

const createString = (character: string, number: number) => {
  let string: string = "";
  for (let i: number = 0; i < number; i++) {
    string += character;
  }
  return string;
};

const createShapesInLines = (shapeCount: number, pattern: string): number[] => {
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
    console.log(array);
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

const drawPatternLine = (
  shapeCount: number,
  shape: string,
  pattern: string,
  totalNumber: number,
  index: number
) => {
  const shapeInLine = createString(shape, shapeCount);
  const blankInLine = createString(
    " ",
    countBlanksInLine(shapeCount, pattern, totalNumber, index)
  );
  const patternLine = createPatternLine(
    pattern,
    index,
    shapeInLine,
    blankInLine
  );

  return patternLine;
};
export { drawPatternLine, createShapesInLines, countBlanksInLine };
