import Pattern6RandomPattern from "./Pattern6RandomShapePattern";

export default class Pattern7RandomShapePattern extends Pattern6RandomPattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
    this.direction = "horizontal";
  }
}
