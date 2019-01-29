import * as React from "react";
import { FormContainer } from "../containers/FormContainer";
import { Pattern } from "../components/Pattern";
import List from "../components/List";
import { observer, inject } from "mobx-react";
import Patterns from "../utils/Patterns";
@inject("patternStore")
@observer
export default class MainPage extends React.Component {
  keys = Object.keys(Patterns).map(k => k);
  patterns = this.keys.map(k => Patterns[k as any]);

  render() {
    const { patternStore }: any = this.props;

    return (
      <div>
        <h1>Pattern Stamp</h1>
        <button
          className={patternStore.gameState}
          onClick={e => {
            patternStore.gameState === "start"
              ? (patternStore.gameState = "close")
              : patternStore.gameState === "close"
              ? (patternStore.gameState = "restart")
              : (patternStore.reset(), (patternStore.gameState = "close"));
          }}
        >
          {patternStore.gameState}
        </button>
        {patternStore.gameState === "close" && (
          <div>
            <p>
              패턴을 선택하고 모양과 숫자를 입력해주세요. <br />
              입력 후 패턴 출력하기 버튼을 누르면 원하는 패턴이 출력됩니다.
            </p>
            <div>패턴을 선택해주세요.</div>
            <List list={this.patterns} />
            <FormContainer />
          </div>
        )}
        <div>
          <div className="printed">
            {patternStore.firstSubmit && (
              <div className="pattern">
                <div>출력 결과</div>
                <Pattern
                  number={Number(patternStore.submitNumber)}
                  shape={patternStore.submitShape}
                  pattern={patternStore.submitPattern}
                />
              </div>
            )}
            {patternStore.formerSubmit ? (
              <div className="pattern">
                <div>이전 패턴</div>
                <Pattern
                  number={Number(patternStore.formerInputState.number)}
                  shape={patternStore.formerInputState.shape}
                  pattern={patternStore.formerInputState.pattern}
                />
              </div>
            ) : null}

            {patternStore.gameState === "restart" &&
              !patternStore.firstSubmit &&
              "출력된 패턴이 없습니다."}
          </div>
        </div>
      </div>
    );
  }
}
