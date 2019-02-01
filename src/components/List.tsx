import * as React from "react";
import { PatternContainer } from "../containers/PatternContainer";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";
import generatePattern from "../utils/generatePattern";
import { Pattern } from "../components/Pattern";
import Patterns from "../utils/Patterns";

export interface ListProps {
  readonly PatternNames: string[];
}

@inject("patternStore")
@observer
class List extends React.Component<ListProps, {}> {
  patternList: any;
  patternNames: any;
  createPatterns() {
    const keys = Object.keys(Patterns).map(k => k);
    const patternNames = keys.map(k => Patterns[k as any]);
    const patternList = patternNames.map(pattern =>
      generatePattern(5, "*", pattern)
    );

    this.patternList = patternList;
    this.patternNames = patternNames;
  }
  render() {
    const { patternStore }: any = this.props;
    !this.patternNames && this.createPatterns();

    return (
      <div className="list">
        {this.patternNames.map((item: any, index: number) => (
          <div
            className={classnames("item", {
              active: patternStore.pattern === item
            })}
            key={index}
            onClick={e => patternStore.onChangePattern(item)}
          >
            <div>{item}</div>

            <Pattern patterns={this.patternList[index]} />

            <div className="check">
              <FontAwesomeIcon icon="check-circle" size="3x" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
