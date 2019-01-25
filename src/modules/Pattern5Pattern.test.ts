import Pattern5ShapePattern from "../modules/Pattern5ShapePattern";

test("pattern5", () => {
  // arrange
  let pattern = new Pattern5ShapePattern(3, "*");

  // act
  let result = pattern.draw();

  // assert
  expect(result[0]).toBe("  ***");
  expect(result[1]).toBe(" **  ");
  expect(result[2]).toBe("*    ");
});
