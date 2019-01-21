import * as React from "react";
import { FormContainer } from "../containers/FormContainer";
import { Pattern } from "../components/Pattern";
import List from "../components/List";
import { observer, inject } from "mobx-react";

@inject("pattern")
@observer
export default class MainPage extends React.Component {
  render() {
    const patterns = [
      "triangle",
      "reverseTriangle",
      "diamond",
      "pattern4",
      "pattern5"
    ];
    const { pattern }: any = this.props;
    return (
      <div>
        <h1>Pattern Stamp</h1>
        <p>
          패턴을 선택하고 모양과 숫자를 입력해주세요. <br />
          입력 후 패턴 출력하기 버튼을 누르면 원하는 패턴이 출력됩니다.
        </p>
        <div>패턴을 선택해주세요.</div>
        <List list={patterns} />
        <FormContainer p={pattern.pattern} />
        <div className="printed">
          {pattern.firstSubmit && (
            <div className="pattern">
              <div>출력 결과</div>
              <Pattern
                number={Number(pattern.submitNumber)}
                shape={pattern.submitShape}
                pattern={pattern.submitPattern}
              />
            </div>
          )}
          {pattern.formerSubmit && (
            <div className="pattern">
              <div>이전 패턴</div>
              <Pattern
                number={Number(pattern.formerInputState.number)}
                shape={pattern.formerInputState.shape}
                pattern={pattern.formerInputState.pattern}
              />
            </div>
          )}
        </div>
      </div>
    );
  }
}
