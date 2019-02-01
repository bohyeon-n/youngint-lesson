import * as React from "react";
import { FormContainer } from "../containers/FormContainer";
import List from "../components/List";
import { observer, inject } from "mobx-react";
import Patterns from "../utils/Patterns";
import { Pattern } from "../components/Pattern";
@inject("patternStore")
@observer
export default class MainPage extends React.Component {
  keys = Object.keys(Patterns).map(k => k);
  patternNames = this.keys.map(k => Patterns[k as any]);
  patterns: any[] = [];

  render() {
    const { patternStore }: any = this.props;

    return (
      <div className={patternStore.time}>
        <h1>Pattern Stamp</h1>
        <button
          className={patternStore.gameState}
          onClick={e => {
            patternStore.gameState === "before"
              ? (patternStore.gameState = "during")
              : patternStore.gameState === "during"
              ? (patternStore.gameState = "after")
              : (patternStore.reset(), (patternStore.gameState = "during"));
          }}
        >
          {patternStore.gameState === "before"
            ? "시작하기"
            : patternStore.gameState === "during"
            ? "종료하기"
            : "다시하기"}
        </button>
        {patternStore.gameState === "during" && (
          <div>
            <p>
              패턴을 선택하고 모양과 숫자를 입력해주세요. <br />
              입력 후 패턴 출력하기 버튼을 누르면 원하는 패턴이 출력됩니다.
            </p>
            <div>패턴을 선택해주세요.</div>
            <List PatternNames={this.patternNames} />
            <FormContainer />
          </div>
        )}
        <div>
          <div className="printed">
            {patternStore.resultPatterns.map((patterns: any, index: number) => (
              <div key={index} className="pattern">
                <div className="result-title">
                  {index === 0 ? "출력 결과" : "이전 패턴"}
                </div>
                <Pattern patterns={patterns} />
              </div>
            ))}
            {patternStore.gameState === "after" &&
              !patternStore.firstSubmit &&
              "출력된 패턴이 없습니다."}
          </div>
        </div>
      </div>
    );
  }
}
