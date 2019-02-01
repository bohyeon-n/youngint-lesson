import BaseShapePattern from "./BaseShapePattern";
import Patterns from "../utils/Patterns";
import { shuffleArray } from "../utils/shuffleArray";
import Pattern6RandomPattern from "./Pattern6RandomShapePattern";

export default class Pattern7RandomShapePattern extends Pattern6RandomPattern {
  constructor(totalNumber: number, shape: string) {
    super(totalNumber, shape);
  }
}
