import { observable, action } from "mobx";

class PatternStore {
  @observable pattern: string = "triangle";
  @observable shape: string = "";
  @observable number: string = "";
  @observable step: number = 0;
  @observable message: string = "";
  @observable validate: boolean = false;
  @observable formerSubmit: boolean = false;
  @observable firstSubmit: boolean = false;
  @observable formerInputState: object;
  @observable submitNumber: string | number;
  @observable submitPattern: string;
  @observable submitShape: string;

  @action onChangePattern(pattern: string) {
    this.pattern = pattern;
    this.isValidate();
    this.step = 1;
  }

  @action getValidateMessage = (n: number): string => {
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

  @action isValidate = (): boolean => {
    const pattern = this.pattern;
    const value = this.number;
    const number = Number(this.number);
    if (value === "") {
      this.message = "";
      this.validate = false;
      return false;
    }
    if (isNaN(number)) {
      this.message = "숫자를 입력해주세요.";
      this.validate = false;
      return false;
    } else if (value.indexOf(".") !== -1) {
      this.message = "정수만 입력할 수 있습니다.";
      this.validate = false;
    } else if (!isFinite(number)) {
      const message = value.slice(0, 1) === "-" ? "작은 수" : "큰 수";

      this.message = `너무 ${message}를 입력하셨네요🤮 0보다 크고 100보다 작은 정수만 입력할 수 있습니다.`;
      this.validate = false;
      return false;
    } else {
      if (
        number > 0 &&
        number <= 100 &&
        !(pattern === "diamond" && number % 2 === 0)
      ) {
        this.validate = true;
        this.message = "";
        return true;
      } else {
        this.message = this.getValidateMessage(number);
        this.validate = false;
        return false;
      }
    }
  };

  @action onChangeNumber = (value: string): void => {
    this.step = 2;
    this.number = value;
    const validate = this.isValidate();
    this.getValidate(validate);
  };

  @action onChangeShape = (value: string): void => {
    this.shape = value;
  };

  @action onSubmit = (): void => {
    const { number, validate, message, shape, pattern } = this;

    validate
      ? this.drawPattern(Number(number), shape, pattern)
      : alert(`${message}
다시 입력해주세요.
    `);
    this.number = "";
    this.message = "";
    this.shape = shape;
    this.validate = false;
  };

  @action onChangeStep = (step: number) => {
    this.step = step;
  };

  @action getValidate = (validate: boolean) => {
    this.validate = validate;
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

    this.number = String(n);
    this.shape = shape;
    this.pattern = pattern;
    this.submitPattern = this.pattern;
    this.submitNumber = n;
    this.submitShape = shape;
  };
}

export default PatternStore;
