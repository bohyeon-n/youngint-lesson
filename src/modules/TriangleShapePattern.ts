import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";

export default class TriangleShapePattern extends BaseShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }

  draw = () => {
    return this.createPattern();
  };
}
