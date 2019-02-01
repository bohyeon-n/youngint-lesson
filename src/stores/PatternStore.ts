import { observable, action } from "mobx";
import { isValid } from "../utils/validation";
import generatePattern from "../utils/generatePattern";

interface formerInputState {
  number: number | string;
  shape: string;
  pattern: string;
}
class PatternStore {
  @observable pattern: string = "triangle";
  @observable shape: string = "";
  @observable numberInputValue: string = "";
  @observable step: number = 0;
  @observable message: string = "";
  @observable valid: boolean = false;
  @observable formerSubmit: boolean = false;
  @observable firstSubmit: boolean = false;
  @observable formerInputState: formerInputState;
  @observable submitNumber: string | number;
  @observable submitPattern: string;
  @observable submitShape: string;
  @observable gameState: string = "before";
  @observable time: number = 0;
  @observable resultPatterns: any = [];

  @action reset = () => {
    this.pattern = "triangle";
    this.shape = "";
    this.numberInputValue = "";
    this.step = 0;
    this.message = "";
    this.valid = false;
    this.formerSubmit = false;
    this.firstSubmit = false;
    this.formerInputState = {
      number: "",
      shape: "",
      pattern: ""
    };
    this.submitPattern = "";
    this.submitShape = "";
    this.resultPatterns = [];
  };

  @action onChangePattern = (pattern: string) => {
    this.pattern = pattern;
    const { valid, message } = isValid(this.numberInputValue, this.pattern);
    this.valid = valid;
    this.message = message;
    this.step = this.shape === "" ? 1 : 2;
  };

  @action onChangeNumber = (value: string): void => {
    this.step = 2;
    this.numberInputValue = value;
    const { valid, message } = isValid(value, this.pattern);
    this.valid = valid;
    this.message = message;
  };

  @action onChangeShape = (value: string): void => {
    this.shape = value;
  };

  @action onSubmit = (): void => {
    const { shape, pattern } = this;
    let { valid, message } = isValid(this.numberInputValue, pattern);
    if (valid) {
      const patterns = generatePattern(
        Number(this.numberInputValue),
        shape,
        pattern
      );
      this.resultPatterns.unshift(patterns);
      if (this.resultPatterns.length >= 3) {
        this.resultPatterns = this.resultPatterns.slice(0, 2);
      }
    }
    message = message === "" ? "숫자를 입력해주세요." : message;
    message = shape === "" ? `모양이 없습니다. \n ${message} ` : message;
    const messageTemplate = `${message} \n 다시 입력해주세요.`;
    valid && shape !== ""
      ? this.drawPattern(Number(this.numberInputValue), shape, pattern)
      : alert(messageTemplate);
    this.numberInputValue = "";
    this.message = "";
    this.shape = shape;
    this.valid = false;
    this.time = this.time + 1;
  };

  @action drawPattern = (n: number, shape: string, pattern: string): void => {
    if (this.firstSubmit) {
      this.formerSubmit = true;
      this.formerInputState = {
        number: this.submitNumber,
        pattern: this.submitPattern,
        shape: this.submitShape
      };
    } else {
      this.firstSubmit = true;
    }

    this.numberInputValue = String(n);
    this.shape = shape;
    this.pattern = pattern;
    this.submitPattern = this.pattern;
    this.submitNumber = n;
    this.submitShape = shape;
  };
}

export default PatternStore;
