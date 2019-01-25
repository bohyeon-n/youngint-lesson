import DiamondShapePattern from "../modules/DiamondShapePattern";

test("diamond", () => {
  // arrange
  let pattern = new DiamondShapePattern(3, "*");

  // act
  let result = pattern.draw();

  // assert
  expect(result[0]).toBe(" * ");
  expect(result[1]).toBe("***");
  expect(result[2]).toBe(" * ");
});
