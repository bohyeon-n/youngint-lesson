import * as React from "react";

export interface PatternProps {
  readonly patterns: any;
  readonly patternName: any;
}

export class Pattern extends React.Component<PatternProps, {}> {
  render() {
    const { patterns, patternName } = this.props;

    return (
      <div style={{ whiteSpace: "pre" }} className={`pattern`}>
        <div className={`pattern-content ${patternName}`}>
          {patterns.patterns.map((patternLine: any, index: number) => (
            <div key={index} className={`section ${patternName}`}>
              {patternLine.pattern.map((line: any, index: number) => (
                <div key={index} className="line">
                  {line.split("").map((character: any, index: number) => (
                    <span key={index} className="character">
                      {character}
                    </span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    );
  }
}
