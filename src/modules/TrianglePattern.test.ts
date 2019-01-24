import TriangleShapePattern from "./TriangleShapePattern";

test("basic", () => {
  // arrange
  let pattern = new TriangleShapePattern(3, "*");

  // act
  let result = pattern.draw();

  // assert
  expect(result[0]).toBe("*  ");
  expect(result[1]).toBe("** ");
  expect(result[2]).toBe("***");
});
