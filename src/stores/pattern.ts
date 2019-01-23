import { observable, action } from "mobx";

class Pattern {
  @observable pattern: string = "triangle";
  @observable shape: string = "";
  @observable numberInputValue: string = "";
  @observable step: number = 0;
  @observable message: string = "";
  @observable valid: boolean = false;
  @observable formerSubmit: boolean = false;
  @observable firstSubmit: boolean = false;
  @observable formerInputState: object;
  @observable submitNumber: string | number;
  @observable submitPattern: string;
  @observable submitShape: string;

  @action onChangePattern(pattern: string) {
    this.pattern = pattern;
    const { valid, message } = this.isValid(
      this.numberInputValue,
      this.pattern
    );
    this.valid = valid;
    this.message = message;
    this.step = this.shape === "" ? 1 : 2;
  }

  getAlertMessage = (n: number): string => {
    const pattern = this.pattern;
    const message =
      n < 0
        ? "0보다 큰 숫자를 입력해주세요."
        : n > 100
        ? "100보다 큰 숫자는 입력할 수 없습니다."
        : n === 0
        ? "0은 입력할 수 없습니다."
        : pattern === "diamond" && n % 2 === 0
        ? "다이아몬드 패턴은 홀수만 입력할 수 있습니다"
        : "";
    return message;
  };

  isValid = (numberInputValue: string, pattern: string) => {
    const number = Number(numberInputValue);
    let valid: boolean = false;
    let message: string;
    if (numberInputValue === "") {
      message = "";
    } else if (isNaN(number)) {
      message = "숫자를 입력해주세요.";
    } else if (numberInputValue.indexOf(".") !== -1) {
      message = "정수만 입력할 수 있습니다.";
    } else if (!isFinite(number)) {
      const messageContent =
        numberInputValue.slice(0, 1) === "-" ? "작은 수" : "큰 수";
      const messageTemplate = `너무 ${messageContent}를 입력하셨네요🤮 0보다 크고 100보다 작은 정수만 입력할 수 있습니다.`;
      message = messageTemplate;
    } else {
      if (
        number > 0 &&
        number <= 100 &&
        !(pattern === "diamond" && number % 2 === 0)
      ) {
        message = "";
        valid = true;
      } else {
        message = this.getAlertMessage(number);
      }
    }

    return {
      valid: valid,
      message: message
    };
  };

  @action onChangeNumber = (value: string): void => {
    this.step = 2;
    this.numberInputValue = value;
    const { valid, message } = this.isValid(value, this.pattern);
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

export default Pattern;
