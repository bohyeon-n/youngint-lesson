import * as React from "react";

export interface PatternProps {
  patterns: Array<string>;
}

export class Pattern extends React.Component<PatternProps, {}> {
  render() {
    const { patterns } = this.props;

    return (
      <div style={{ whiteSpace: "pre" }} className={`pattern`}>
        <div className="pattern-content">
          {patterns.map((patternLine, index) => (
            <div key={index} className="line">
              {patternLine.split("").map(character => (
                <span className="character">{character}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
