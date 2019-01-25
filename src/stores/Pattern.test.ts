import Pattern from "./pattern";


test("클릭시, step이동", () => {
  // arrange
  let pattern = new Pattern();

  // act
  pattern.onChangePattern("");

  // aseert
  expect(1).toBe(pattern.step);
});


test("클릭시, step이동", () => {
  // arrange
  let pattern = new Pattern();
  pattern.shape = "*";

  // act
  pattern.onChangePattern("");

  // aseert
  expect(2).toBe(pattern.step);
});