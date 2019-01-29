import { observable, action } from "mobx";
import { isValid } from "../utils/validation";

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
  @observable gameState: string = "start";

  @action reset() {
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
  }

  @action onChangePattern(pattern: string) {
    this.pattern = pattern;
    const { valid, message } = isValid(this.numberInputValue, this.pattern);
    this.valid = valid;
    this.message = message;
    this.step = this.shape === "" ? 1 : 2;
  }

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
    const { valid, message, shape, pattern } = this;
    valid
      ? this.drawPattern(Number(this.numberInputValue), shape, pattern)
      : alert(`${message}
다시 입력해주세요.
    `);
    this.numberInputValue = "";
    this.message = "";
    this.shape = shape;
    this.valid = false;
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
