import * as React from "react";
import { Form } from "../components/Form";
import { Message } from "../components/Message";
import { observer, inject } from "mobx-react";

@inject("patternStore")
@observer
export class FormContainer extends React.Component {
  render() {
    const { patternStore }: any = this.props;

    return (
      <React.Fragment>
        <div>모양을 입력해주세요 *</div>
        <Form
          value={patternStore.shape}
          handleInputChange={patternStore.onChangeShape}
          labelName="모양"
          focus={patternStore.step === 1}
          onSubmit={patternStore.onSubmit}
          name={"shape"}
        />
        <div>숫자를 입력해주세요.*</div>
        <div>숫자는 1부터 100까지의 정수만을 입력할 수 있습니다.</div>
        <Form
          focus={patternStore.step === 2}
          value={patternStore.numberInputValue}
          handleInputChange={patternStore.onChangeNumber}
          labelName="숫자"
          onSubmit={patternStore.onSubmit}
          pattern={patternStore.pattern}
          name={"number"}
        />
        <div className="message">
          <Message message={patternStore.message} alert={patternStore.valid} />
        </div>

        <button onClick={patternStore.onSubmit}>패턴 출력하기</button>
      </React.Fragment>
    );
  }
}
