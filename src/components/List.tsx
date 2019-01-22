import * as React from "react";
import { Pattern } from "../components/Pattern";
import classnames from "classnames";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { observer, inject } from "mobx-react";

export interface ListProps {
  readonly list: symbol[];
}

@inject("pattern")
@observer
class List extends React.Component<ListProps, {}> {
  render() {
    const { list } = this.props;
    const { pattern }: any = this.props;

    return (
      <div className="list">
        {list.map((item, index) => (
          <div
            className={classnames("item", {
              active: pattern.pattern === item
            })}
            key={index}
            onClick={e => pattern.onChangePattern(item)}
          >
            <div>{item}</div>
            <div className="pattern">
              <Pattern number={5} shape="*" pattern={item} />
            </div>

            <div className="check">
              <FontAwesomeIcon icon="check-circle" size="5x" />
            </div>
          </div>
        ))}
      </div>
    );
  }
}

export default List;
