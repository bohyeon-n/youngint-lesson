import * as React from "react";
import { PatternContainer } from "../containers/PatternContainer";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";

export interface ListProps {
  readonly list: string[];
}

@inject("patternStore")
@observer
class List extends React.Component<ListProps, {}> {
  render() {
    const { list } = this.props;
    const { patternStore }: any = this.props;

    return (
      <div className="list">
        {list.map((item, index) => (
          <div
            className={classnames("item", {
              active: patternStore.pattern === item
            })}
            key={index}
            onClick={e => patternStore.onChangePattern(item)}
          >
            <div>{item}</div>

            <PatternContainer number={5} shape="*" pattern={item} />

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
