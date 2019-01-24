import BasicShapePattern from "./BasicShapePattern";


test("basic", () => {
  // arrange
  let pattern = new BasicShapePattern(3, "*");

  // act
  let result = pattern.draw();

  // assert
  expect(result[0]).toBe("*  ");
  expect(result[1]).toBe("** ");
  expect(result[2]).toBe("***");
})