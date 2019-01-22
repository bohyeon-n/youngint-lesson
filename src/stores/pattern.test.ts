import PatternStore from './pattern';

test.only.each([
  [1,true], [2, true], [100, true], [-1, false], [99999, false]
])("basic for number", (input, expected) => {
  // arrange
  let pattern = new PatternStore();

  // act
  pattern.number = String(input);
  let result = pattern.isValidate();

  // assert
  expect(result).toBe(expected);
});

test.only.each([
  ["-1", false], ["     1", true], ["      000001    ", true], ["9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999", false]
])("텍스트 값을 입력했을 때", (input, expected) => {
  // arrange
  let pattern = new PatternStore();

  // act
  pattern.number = input;
  let result = pattern.isValidate();

  // assert
  expect(result).toBe(expected);
})