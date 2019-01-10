import * as React from "react";

export interface StarsProps {
  number: number;
  string: string;
}

export class Stars extends React.Component<StarsProps, {}> {
  stampStar = (n: number, str: string) => {
    let string: string = "";
    for (let i: number = 0; i < n; i++) {
      string += str;
    }
    return string;
  };

  render() {
    function createArray(n: number) {
      const array: Array<any> = [];
      for (let i = 0; i < n; i++) {
        array.push(i);
      }
      return array;
    }
    let arr: Array<any> = createArray(this.props.number);

    return (
      <div>
        {arr.map(n => (
          <div key={n}>{this.stampStar(n + 1, this.props.string)}</div>
        ))}
      </div>
    );
  }
}

export interface StarProps {
  n: number;
}
