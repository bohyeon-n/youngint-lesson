import TriangleShapePattern from "./TriangleShapePattern";

test("triangle", () => {
  // arrange
  let pattern = new TriangleShapePattern(3, "*");

  // act
  let result = pattern.draw().patterns[0].pattern;

  // assert
  expect(result[0]).toBe("*  ");
  expect(result[1]).toBe("** ");
  expect(result[2]).toBe("***");
});
