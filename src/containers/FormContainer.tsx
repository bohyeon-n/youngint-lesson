import * as React from "react";
import { Form } from "../components/Form";
import { Message } from "../components/Message";
import { observer, inject } from "mobx-react";

@inject("pattern")
@observer
export class FormContainer extends React.Component {
  render() {
    const { pattern }: any = this.props;

    return (
      <React.Fragment>
        <div>모양을 입력해주세요 *</div>
        <Form
          value={pattern.shape}
          handleInputChange={pattern.onChangeShape}
          labelName="모양"
          focus={pattern.step === 1}
          onSubmit={pattern.onSubmit}
          name={"shape"}
        />
        <div>숫자를 입력해주세요.*</div>
        <div>숫자는 1부터 100까지의 정수만을 입력할 수 있습니다.</div>
        <Form
          focus={pattern.step === 2}
          value={pattern.numberInputValue}
          handleInputChange={pattern.onChangeNumber}
          labelName="숫자"
          onSubmit={pattern.onSubmit}
          pattern={pattern.pattern}
          name={"number"}
        />
        <div className="message">
          <Message message={pattern.message} alert={pattern.valid} />
        </div>

        <button onClick={pattern.onSubmit}>패턴 출력하기</button>
      </React.Fragment>
    );
  }
}
