import { isValid } from "../utils/validation";
import { createShapesInLines, countBlanksInLine } from "../utils/drawPattern";

test.only.each([
  [1, true],
  [2, true],
  [100, true],
  [-1, false],
  [99999, false]
])("basic for number", (input, expected) => {
  // arrange

  // act
  let result = isValid(input, "triangle");
  // assert
  expect(result.valid).toBe(expected);
});

test.only.each([
  ["-1", false],
  ["     1", true],
  ["      000001    ", true],
  [
    "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
    false
  ]
])("텍스트 값을 입력했을 때", (input, expected) => {
  // arrange

  // act
  let result = isValid(input, "triangle");

  // assert
  expect(result.valid).toBe(expected);
});

test.only.each([
  ["triangle", [0, 1, 2, 3, 4]],
  ["reverseTriangle", [4, 3, 2, 1, 0]],
  ["diamond", [0, 2, 4, 2, 0]],
  ["pattern4", [4, 4, 4, 4, 4]],
  ["pattern5", [4, 3, 2, 1, 0]]
])("한 줄에 들어가는 모양의 개수의 배열", (input, expected) => {
  // arrange
  // act
  const result = createShapesInLines(5, input);
  //assert
  expect(result).toEqual(expect.arrayContaining(expected));
});
