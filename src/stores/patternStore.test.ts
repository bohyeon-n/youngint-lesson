import PatternStore from "./patternStore";

test("패턴 클릭 시 step 이동 / shape가 없을 시", () => {
  //arrange
  const pattern = new PatternStore();

  // act
  pattern.onChangePattern("");

  // assert
  expect(1).toBe(pattern.step);
});

test("패턴 클릭 시 step 이동/shape가 있을 시", () => {
  //arrange
  const pattern = new PatternStore();
  pattern.shape = "*";
  // act
  pattern.onChangePattern("");

  // assert
  expect(2).toBe(pattern.step);
});
