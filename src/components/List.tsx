import * as React from "react";
import { PatternContainer } from "../containers/PatternContainer";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";
import generatePattern from "../utils/generatePattern";
import { Pattern } from "../components/Pattern";
import Patterns from "../utils/Patterns";

export interface ListProps {
  readonly list: string[];
}

@inject("patternStore")
@observer
class List extends React.Component<ListProps, {}> {
  patternList: any;
  patterns: any;
  createPatterns() {
    const keys = Object.keys(Patterns).map(k => k);
    const patterns = keys.map(k => Patterns[k as any]);
    const patternList = patterns.map(pattern =>
      generatePattern(5, "*", pattern)
    );

    this.patternList = patternList;
    this.patterns = patterns;
  }
  render() {
    const { patternStore }: any = this.props;
    !this.patterns && this.createPatterns();

    return (
      <div className="list">
        {this.patterns.map((item: any, index: number) => (
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
