import Pattern6ShapePattern from "./Pattern6ShapePattern";

export default class Pattern7ShapePattern extends Pattern6ShapePattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
    this.direction = "horizontal";
  }
}
