import Pattern7ShapePattern from "./Pattern7ShapePattern";

test("pattern7", () => {
  //arrange
  let pattern = new Pattern7ShapePattern(3, "*");

  //act
  let result = pattern.draw();
  // assert

  expect(result[0]).toBe("*  *  *  ");
  expect(result[1]).toBe("   ** ** ");
  expect(result[2]).toBe("      ***");
});
