import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";
import { PatternModel } from "../PatternModel/PatternViewModel";

export default class Pattern6ShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  protected countShapesInLines = () => {
    const { totalNumber } = this;
    let array: any = [];
    new Array(totalNumber)
      .fill("")
      .map((i, index) => index + 1)
      .map(lineNumber => {
        array.push([
          ...new Array(lineNumber).fill("").map((line, index) => index)
        ]);
      });

    return array;
  };

  protected createPattern = () => {
    const shapeArray = this.countShapesInLines();

    shapeArray.map((section: number[], index: number) => {
      let patterns: string[] = [];
      section.map((shapeCount: number, index: number) => {
        patterns.push(this.drawPatternLine(shapeCount + 1, index));
      });

      const patternModel = new PatternModel(patterns);
      this.patternSetModel.addModel(patternModel);
    });
  };
}
