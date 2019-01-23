const isValid = (numberInputValue: string, pattern: string) => {
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
      message =
        number < 0
          ? "0보다 큰 숫자를 입력해주세요."
          : number > 100
          ? "100보다 큰 숫자는 입력할 수 없습니다."
          : number === 0
          ? "0은 입력할 수 없습니다."
          : pattern === "diamond" && number % 2 === 0
          ? "다이아몬드 패턴은 홀수만 입력할 수 있습니다"
          : "";
    }
  }

  return {
    valid: valid,
    message: message
  };
};

export { isValid };
