import * as React from "react";
import { Pattern } from "../components/Pattern";
import classnames from "classnames";

export interface ListProps {
  readonly list: string[];
  readonly handleItemClick: Function;
  readonly activeItem: string;
}

export class List extends React.Component<ListProps, {}> {
  render() {
    const { list, handleItemClick, activeItem } = this.props;
    return (
      <div className="list">
        {list.map((item, index) => (
          <div
            className={classnames("item", { active: activeItem === item })}
            key={index}
            onClick={e => handleItemClick(item)}
          >
            <div>{item}</div>
            <div className="pattern">
              <Pattern number={5} shape="*" pattern={item} />
            </div>
          </div>
        ))}
      </div>
    );
  }
}
