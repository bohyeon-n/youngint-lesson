import { observable, action } from "mobx";
import { isValid } from "../utils/validation";
import generatePattern from "../utils/generatePattern";

class PatternStore {
  @observable pattern: string = "triangle";
  @observable shape: string = "";
  @observable numberInputValue: string = "";
  @observable step: number = 0;
  @observable message: string = "";
  @observable valid: boolean = false;
  @observable gameState: string = "before";
  @observable resultPatterns: any = [];
  @observable patternNumberRecord: number = 1;
  @observable patternNumberRecordMessage: string = "";

  @action reset = (): void => {
    this.pattern = "triangle";
    this.shape = "";
    this.numberInputValue = "";
    this.step = 0;
    this.message = "";
    this.valid = false;
    this.resultPatterns = [];
    this.patternNumberRecord = 1;
    this.patternNumberRecordMessage = "";
  };

  @action onChangePattern = (pattern: string): void => {
    this.pattern = pattern;
    const { valid, message } = isValid(this.numberInputValue, this.pattern);
    this.valid = valid;
    this.message = message;
    this.step =
      this.patternNumberRecordMessage !== "" ? 1 : this.shape === "" ? 2 : 3;
  };

  @action onChangePatternNumberRecord = (number: number): void => {
    this.step = 1;
    this.patternNumberRecord = number;
    if (number < 1 || number > 100) {
      this.patternNumberRecordMessage =
        "패턴 기록은 1부터 100까지 설정할 수 있습니다.";
    } else {
      this.patternNumberRecordMessage = "";
    }
  };

  @action onChangeNumber = (value: string): void => {
    this.step = 3;
    this.numberInputValue = value;
    const { valid, message } = isValid(value, this.pattern);
    this.valid = valid;
    this.message = message;
  };

  @action onChangeShape = (value: string): void => {
    this.step = 2;
    this.shape = value;
  };

  @action onSubmit = (): void => {
    const { shape, pattern, patternNumberRecord } = this;
    let { valid, message } = isValid(this.numberInputValue, pattern);
    const allInputsValidity =
      valid &&
      shape !== "" &&
      !(patternNumberRecord <= 0 || patternNumberRecord > 100);
    if (allInputsValidity) {
      const patternObj = generatePattern(
        Number(this.numberInputValue),
        shape,
        pattern
      );

      if (this.resultPatterns.length > Number(this.patternNumberRecord)) {
        this.resultPatterns = this.resultPatterns.slice(
          0,
          Number(this.patternNumberRecord)
        );
      }
      this.resultPatterns.unshift({
        patterns: patternObj.patterns,
        patternDirection: patternObj.patternDirection
      });
    }
    message = message === "" ? "숫자를 입력해주세요." : message;
    message = shape === "" ? `모양이 없습니다. \n ${message} ` : message;
    message =
      patternNumberRecord <= 0 || patternNumberRecord > 100
        ? `패턴 기록은 1부터 100까지 설정할 수 있습니다\n ${message}`
        : message;
    const messageTemplate = `${message} \n 다시 입력해주세요.`;
    allInputsValidity
      ? this.drawPattern(Number(this.numberInputValue), shape, pattern)
      : alert(messageTemplate);

    this.numberInputValue = "";
    this.message = "";
    this.shape = shape;
    this.valid = false;
    this.patternNumberRecord =
      patternNumberRecord <= 0 || patternNumberRecord > 100
        ? 1
        : this.patternNumberRecord;
    this.patternNumberRecordMessage = "";
  };

  @action drawPattern = (n: number, shape: string, pattern: string): void => {
    this.numberInputValue = String(n);
    this.shape = shape;
    this.pattern = pattern;
  };
}

export default PatternStore;
