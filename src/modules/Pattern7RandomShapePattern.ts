import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";
import { shuffleArray } from "../utils/shuffleArray";
export default class Pattern7RandomShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected createPattern = (pattern: string) => {
    const number = this.totalNumber;
    const shapeArray = new Array(number).fill("");
    let patterns: Array<any> = [];
    const blankLine = this.repeatCharacterNumberTimes(" ", number);
    shapeArray.map((content, index) => {
      const line = new Array(index + 1).fill("").map((content, index) => {
        return this.drawPatternLine(index + 1, Patterns.Pattern7Random, index);
      });

      patterns.push(line);
    });

    const shuffledPatterns = shuffleArray(patterns);

    const horizontalDirection = shapeArray.map((content, lineIndex) => {
      return shapeArray.map((content, index) => {
        return shuffledPatterns[lineIndex][index]
          ? shuffledPatterns[lineIndex][index]
          : blankLine;
      });
    });

    return horizontalDirection.map((line, i) => {
      let joinedLine = "";
      line.map((shape, index) => {
        joinedLine += horizontalDirection[index][i];
      });
      return joinedLine;
    });
  };

  draw = () => {
    return this.createPattern(Patterns.Pattern7);
  };
}
