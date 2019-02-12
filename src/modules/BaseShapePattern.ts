import {
  PatternSetModel,
  PatternModel
} from "../PatternModel/PatternViewModel";

abstract class BaseShapePattern {
  protected totalNumber: number;
  protected shape: string;
  protected patternSetModel: any;
  direction: string;

  protected constructor(totalNumber: number, shape: string) {
    this.totalNumber = totalNumber;
    this.shape = shape;
    this.patternSetModel = new PatternSetModel();
    this.direction = "vertical";
  }

  //  한 라인의 공백을 세기 위한 메서드 index는 전체 패턴에서 몇 번째 라인인지를 표시합니다.
  protected countBlanksInLine = (shapeCount: number, index: number): number => {
    const { totalNumber } = this;
    return totalNumber - shapeCount;
  };

  protected repeatCharacterNumberTimes = (
    character: string,
    number: number
  ) => {
    return character.repeat(number);
  };

  // 전체 패턴에서 한 라인 당 몇 개의 모양이 있는지 세기 위한 메서드(패턴의 모든 라인을 셉니다.)
  protected countShapesInLines = (): number[] => {
    const { totalNumber } = this;
    return new Array(totalNumber).fill("").map((i, index) => index);
  };

  protected combineShapesBlanks = (
    index: number,
    shapesInLine: string,
    blankInLine: string
  ): string => {
    return shapesInLine + blankInLine;
  };

  protected createLine = (shapeCount: number, index: number) => {
    const { shape } = this;
    const shapeInLine = this.repeatCharacterNumberTimes(shape, shapeCount);
    const blankInLine = this.repeatCharacterNumberTimes(
      " ",
      this.countBlanksInLine(shapeCount, index)
    );
    const patternLine = this.combineShapesBlanks(
      index,
      shapeInLine,
      blankInLine
    );

    return patternLine;
  };

  protected createPattern = () => {
    const shapeArray = this.countShapesInLines();

    const patterns = shapeArray.map((shapeCount, index) =>
      this.createLine(shapeCount + 1, index)
    );
    const patternModel = new PatternModel(patterns);
    this.patternSetModel.addModel(patternModel);
  };

  draw = () => {
    this.createPattern();

    return this.patternSetModel;
  };
}

export default BaseShapePattern;
