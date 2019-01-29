import Pattern6ShapePattern from "./Pattern6ShapePattern";

test("pattern6", () => {
  //arrange
  let pattern = new Pattern6ShapePattern(3, "*");

  //act
  let result = pattern.draw();

  //assert
  expect(result[0]).toBe("*  ");
  expect(result[1]).toBe("   ");
  expect(result[2]).toBe("*  ");
  expect(result[3]).toBe("** ");
  expect(result[4]).toBe("   ");
  expect(result[5]).toBe("*  ");
  expect(result[6]).toBe("** ");
  expect(result[7]).toBe("***");
});
