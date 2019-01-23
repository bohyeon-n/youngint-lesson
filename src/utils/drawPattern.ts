import Patterns from "../utils/Patterns";

const getShapeAndBlank = (
  n: number,
  shape: string,
  pattern: string,
  totalNumber: number,
  index: number
) => {
  let shapesInLine: string = "";
  let blankInLine: string = "";
  // 모양
  for (let i: number = 0; i < n; i++) {
    shapesInLine += shape;
  }
  // 공백
  if (pattern === Patterns.Pattern4) {
    for (let i: number = 0; i < n - 1; i++) {
      blankInLine += " ";
    }
  } else if (pattern === Patterns.Pattern5) {
    for (let i: number = 0; i < totalNumber - 1 + index; i++) {
      blankInLine += " ";
    }
  } else {
    for (let i: number = 0; i < totalNumber - n; i++) {
      blankInLine += " ";
    }
  }
  return { shapesInLine, blankInLine };
};

const combineShapeAndBlank = (
  pattern: string,
  index: number,
  shapesInLine: string,
  blankInLine: string
) => {
  let string: string = "";
  if (pattern === Patterns.Triangle) {
    string = shapesInLine + blankInLine;
  } else if (pattern === Patterns.ReverseTriangle) {
    string = blankInLine + shapesInLine;
  } else if (pattern === Patterns.Diamond) {
    //diamond
    const centerIndex = blankInLine.length / 2;
    string =
      blankInLine.slice(0, centerIndex) +
      shapesInLine +
      blankInLine.slice(centerIndex, blankInLine.length);
  } else if (pattern === Patterns.Pattern4) {
    // pattern4
    const blankLength = blankInLine.length;
    string =
      blankInLine.slice(0, blankLength - index) +
      shapesInLine +
      blankInLine.slice(-index);
  } else if (pattern === Patterns.Pattern5) {
    // pattern5
    string =
      blankInLine.slice(0, blankInLine.length - 2 * index) +
      shapesInLine +
      blankInLine.slice(-2 * index);
  }
  return string;
};

const numberOfShapeInLine = (n: number, pattern: string): number[] => {
  let array: Array<number> = [];
  if (pattern === Patterns.Diamond) {
    let i: number = 0;
    while (i < n) {
      array.push(i);
      i += 2;
    }
    return [...array, ...[...array.slice(0, -1)].reverse()];
  } else if (pattern === Patterns.Pattern4) {
    for (let i = 0; i < n; i++) {
      array.push(n);
    }
    return array;
  } else {
    for (let i = 0; i < n; i++) {
      array.push(i);
    }
    array =
      Patterns.ReverseTriangle === pattern || Patterns.Pattern5 === pattern
        ? array.reverse()
        : array;
    return array;
  }
};

export { getShapeAndBlank, combineShapeAndBlank, numberOfShapeInLine };
