import ReverseTrianglePattern from "./ReverseTrianglePattern";

test("reverseTriangle", () => {
  // arrange
  let pattern = new ReverseTrianglePattern(3, "*");

  // act
  let result = pattern.draw();

  // assert
  expect(result[0]).toBe("***");
  expect(result[1]).toBe(" **");
  expect(result[2]).toBe("  *");
});
