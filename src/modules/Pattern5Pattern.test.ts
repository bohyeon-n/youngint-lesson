import generatePattern from "../utils/generatePattern";
import Patterns from "../utils/Patterns";

test("pattern5", () => {
  // arrange
  let { patterns } = generatePattern(3, "*", Patterns.Pattern5);

  // act
  let result = patterns.patterns;
  let expected = [["  ***", " **  ", "*    "]];
  // assert
  result.map((line: any, index: number) =>
    line.pattern.map((charac: string, i: number) =>
      expect(expected[index][i]).toBe(charac)
    )
  );
});
