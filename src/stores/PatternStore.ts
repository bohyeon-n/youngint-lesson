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
  @observable recordedPatterns: number = 1;
  @observable recordedPatternsAlertMessage: string = "";

  @action reset = () => {
    this.pattern = "triangle";
    this.shape = "";
    this.numberInputValue = "";
    this.step = 0;
    this.message = "";
    this.valid = false;
    this.resultPatterns = [];
    this.recordedPatterns = 1;
    this.recordedPatternsAlertMessage = "";
  };

  @action onChangePattern = (pattern: string) => {
    this.pattern = pattern;
    const { valid, message } = isValid(this.numberInputValue, this.pattern);
    this.valid = valid;
    this.message = message;
    this.step = this.shape === "" ? 1 : 2;
  };

  @action onChangeRecordedPattern = (number: number) => {
    this.recordedPatterns = number;
    if (number < 1 || number > 100) {
      this.recordedPatternsAlertMessage =
        "패턴 기록은 1부터 100까지 설정할 수 있습니다.";
    } else {
      this.recordedPatternsAlertMessage = "";
    }
  };

  @action onChangeNumber = (value: string): void => {
    this.step = 2;
    this.numberInputValue = value;
    const { valid, message } = isValid(value, this.pattern);
    this.valid = valid;
    this.message = message;
  };

  @action onChangeShape = (value: string): void => {
    this.step = 1;
    this.shape = value;
  };

  @action onSubmit = (): void => {
    const { shape, pattern, recordedPatterns } = this;
    let { valid, message } = isValid(this.numberInputValue, pattern);
    const allInputsValidity =
      valid &&
      shape !== "" &&
      !(recordedPatterns <= 0 || recordedPatterns > 100);
    if (allInputsValidity) {
      const patternObj = generatePattern(
        Number(this.numberInputValue),
        shape,
        pattern
      );

      if (this.resultPatterns.length > Number(this.recordedPatterns)) {
        this.resultPatterns = this.resultPatterns.slice(
          0,
          Number(this.recordedPatterns)
        );
      }
      this.resultPatterns.unshift({
        patternName: pattern,
        patterns: patternObj.patterns,
        patternDirection: patternObj.patternDirection
      });
    }
    message = message === "" ? "숫자를 입력해주세요." : message;
    message = shape === "" ? `모양이 없습니다. \n ${message} ` : message;
    message =
      recordedPatterns <= 0 || recordedPatterns > 100
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
    this.recordedPatterns =
      recordedPatterns <= 0 || recordedPatterns > 100
        ? 1
        : this.recordedPatterns;
    this.recordedPatternsAlertMessage = "";
  };

  @action drawPattern = (n: number, shape: string, pattern: string): void => {
    this.numberInputValue = String(n);
    this.shape = shape;
    this.pattern = pattern;
  };
}

export default PatternStore;
