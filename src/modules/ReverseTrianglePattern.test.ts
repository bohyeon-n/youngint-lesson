import ReverseTrianglePattern from "./ReverseTrianglePattern";


test("basic", () => {
  // arrange
  const pattern = new ReverseTrianglePattern(3, "*");

  // act
  let result = pattern.draw();

  // assert
  expect(result[0]).toBe("***");
  expect(result[1]).toBe("** ");
  expect(result[2]).toBe("*  ");
});