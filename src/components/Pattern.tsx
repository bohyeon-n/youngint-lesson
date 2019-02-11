import * as React from "react";

export interface PatternProps {
  readonly patterns: any;
  readonly patternDirection: string;
}

export class Pattern extends React.Component<PatternProps, {}> {
  render() {
    const { patterns, patternDirection } = this.props;

    return (
      <div style={{ whiteSpace: "pre" }} className={`pattern `}>
        <div className={`pattern-content ${patternDirection}`}>
          {patterns.patterns.map((patternLine: any, index: number) => (
            <div key={index} className={`section`}>
              {patternLine.pattern.map((line: any, index: number) => (
                <div key={index} className="line">
                  {Array.from(line).map((character: any, index: number) => (
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
