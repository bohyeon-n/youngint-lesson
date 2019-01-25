import Pattern4ShapePattern from "../modules/Pattern4ShapePattern";

test("pattern4", () => {
  // arrange
  let pattern = new Pattern4ShapePattern(3, "*");

  // act
  let result = pattern.draw();

  // assert
  expect(result[0]).toBe("  ***");
  expect(result[1]).toBe(" *** ");
  expect(result[2]).toBe("***  ");
});
