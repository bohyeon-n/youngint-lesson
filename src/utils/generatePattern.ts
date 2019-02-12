import Patterns from "./Patterns";
import TriangleShapePattern from "../modules/TriangleShapePattern";
import DiamondShapePattern from "../modules/DiamondShapePattern";
import ReverseTrianglePattern from "../modules/ReverseTrianglePattern";
import Pattern4ShapePattern from "../modules/Pattern4ShapePattern";
import Pattern5ShapePattern from "../modules/Pattern5ShapePattern";
import Pattern6ShapePattern from "../modules/Pattern6ShapePattern";
import Pattern7ShapePattern from "../modules/Pattern7ShapePattern";
import Pattern6RandomShapePattern from "../modules/Pattern6RandomShapePattern";
import Pattern7RandomShapePattern from "../modules/Pattern7RandomShapePattern";

const generatePattern = (number: number, shape: string, pattern: string) => {
  let patternObj: any;

  switch (pattern) {
    case Patterns.Triangle:
      patternObj = new TriangleShapePattern(number, shape);
      break;
    case Patterns.ReverseTriangle:
      patternObj = new ReverseTrianglePattern(number, shape);
      break;
    case Patterns.Diamond:
      patternObj = new DiamondShapePattern(number, shape);
      break;
    case Patterns.Pattern4:
      patternObj = new Pattern4ShapePattern(number, shape);
      break;
    case Patterns.Pattern5:
      patternObj = new Pattern5ShapePattern(number, shape);
      break;
    case Patterns.Pattern6:
      patternObj = new Pattern6ShapePattern(number, shape);
      break;
    case Patterns.Pattern7:
      patternObj = new Pattern7ShapePattern(number, shape);
      break;
    case Patterns.Pattern6Random:
      patternObj = new Pattern6RandomShapePattern(number, shape);
      break;
    case Patterns.Pattern7Random:
      patternObj = new Pattern7RandomShapePattern(number, shape);
      break;
  }
  const patterns = patternObj.draw();
  const patternDirection = patternObj.direction;
  return { patterns, patternDirection };
};

export default generatePattern;
