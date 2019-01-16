import * as React from "react";
import { Pattern } from "../components/Pattern";

export interface ListProps {
  readonly list: string[];
  readonly handleItemClick: Function;
}
export class List extends React.Component<ListProps, {}> {
  render() {
    const { list, handleItemClick } = this.props;
    return (
      <React.Fragment>
        {list.map((item, index) => (
          <div key={index} onClick={e => handleItemClick(item)}>
            <div>{item}</div>
            <Pattern number={5} shape="*" pattern={item} />
          </div>
        ))}
      </React.Fragment>
    );
  }
}
