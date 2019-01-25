import { isValid } from "../utils/validation";

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
