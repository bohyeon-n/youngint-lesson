// import { isValid } from "../utils/validation";
// import {
//   createShapesInLines,
//   countBlanksInLine,
//   createPatternLine
// } from "../utils/drawPattern";

// test.only.each([
//   [1, true],
//   [2, true],
//   [100, true],
//   [-1, false],
//   [99999, false]
// ])("basic for number", (input, expected) => {
//   // arrange

//   // act
//   let result = isValid(input, "triangle");
//   // assert
//   expect(result.valid).toBe(expected);
// });

// test.only.each([
//   ["-1", false],
//   ["     1", true],
//   ["      000001    ", true],
//   [
//     "9999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999999",
//     false
//   ]
// ])("텍스트 값을 입력했을 때", (input, expected) => {
//   // arrange

//   // act
//   let result = isValid(input, "triangle");

//   // assert
//   expect(result.valid).toBe(expected);
// });

// test.only.each([
//   ["triangle", [0, 1, 2, 3, 4]],
//   ["reverseTriangle", [4, 3, 2, 1, 0]],
//   ["diamond", [0, 2, 4, 2, 0]],
//   ["pattern4", [4, 4, 4, 4, 4]],
//   ["pattern5", [4, 3, 2, 1, 0]]
// ])("check shapes in lines", (input, expected) => {
//   // arrange
//   // act
//   const result = createShapesInLines(5, input);
//   //assert
//   expect(result).toEqual(expect.arrayContaining(expected));
// });

// test.only.each([[0, 4], [1, 2], [2, 0], [3, 2], [4, 4]])(
//   "check diamond blank count",
//   (input, expected) => {
//     //arrange;
//     //act
//     const totalNumber = 5;
//     const pattern = "diamond";
//     const shapeCount = totalNumber - expected;
//     const result = countBlanksInLine(shapeCount, pattern, totalNumber, input);
//     //assert
//     expect(result).toBe(expected);
//   }
// );

// test.only.each([[0, 4], [1, 4], [2, 4], [3, 4], [4, 4]])(
//   "check pattern4 blank count",
//   (input, expected) => {
//     // arrange
//     // act
//     const totalNumber = 5;
//     const pattern = "pattern4";
//     const result = countBlanksInLine(totalNumber, pattern, totalNumber, input);
//     // assert
//     expect(result).toBe(expected);
//   }
// );

// test.only.each([[0, 4], [1, 5], [2, 6], [3, 7], [4, 8]])(
//   "check pattern5 blank count",
//   (input, expected) => {
//     //arrange
//     //act
//     const totalNumber = 5;
//     const pattern = "pattern5";
//     const shapeCount = totalNumber - input;
//     const result = countBlanksInLine(shapeCount, pattern, totalNumber, input);
//     //assert
//     expect(result).toBe(expected);
//   }
// );

// test.only.each([[0, 4], [1, 3], [2, 2], [3, 1], [4, 0]])(
//   "check triangle blank count",
//   (input, expected) => {
//     //arrange
//     // act
//     const totalNumber = 5;
//     const pattern = "triangle";
//     const shapeCount = input + 1;
//     const result = countBlanksInLine(shapeCount, pattern, totalNumber, input);

//     // assert
//     expect(result).toBe(expected);
//   }
// );

// test.only.each([[0, 0], [1, 1], [2, 2], [3, 3], [4, 4]])(
//   "check reverseTriangle blank count",
//   (input, expected) => {
//     //arrange
//     //act
//     const totalNumber = 5;
//     const pattern = "reverseTriangle";
//     const shapeCount = totalNumber - input;
//     const result = countBlanksInLine(shapeCount, pattern, totalNumber, input);
//     //assert
//     expect(result).toBe(expected);
//   }
// );

// // test.only([])("check triangle ");
