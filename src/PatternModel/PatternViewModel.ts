class PatternModel {
  pattern: Array<string>;
  constructor(pattern: Array<string>) {
    this.pattern = pattern;
  }
}

class PatternSetModel {
  patterns: Array<PatternModel> = [];
  addModel = (model: any) => {
    this.patterns.push(model);
  };
}

export { PatternModel, PatternSetModel };
