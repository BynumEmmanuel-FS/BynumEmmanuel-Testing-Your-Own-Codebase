const { capitalizeWords } = require("../scripts/index.js");

test("Capitalize", () => {
  expect(capitalizeWords("lowercase")).toBe("Lowercase");
  expect(capitalizeWords("UPPERCASE")).toBe("Uppercase");
  expect(capitalizeWords("no character of this sentence is capitalized")).toBe(
    "No Character Of This Sentence Is Capitalized",
  );
  expect(
    capitalizeWords("EVERY CHARACTER OF THIS SENTENCE IS CAPITALIZED"),
  ).toBe("Every Character Of This Sentence Is Capitalized");
});

test("Edge Case", () => {
  expect(capitalizeWords("12345")).toBe("12345");
  expect(capitalizeWords("there are 7 words in this sentence")).toBe(
    "There Are 7 Words In This Sentence",
  );
  expect(capitalizeWords("this is an array: ['a', 'b', 'c']")).toBe(
    "This Is An Array: ['a', 'b', 'c']",
  );
  expect(
    capitalizeWords("this is an object: { a: 1, b: 2, c: 3 }"),
  ).toBe("This Is An Object: { a: 1, b: 2, c: 3 }");
});

test("Invalid Inputs", () => {
  expect(() => capitalizeWords(123456)).toThrow(TypeError);
  expect(() => capitalizeWords(NaN)).toThrow(TypeError);
  expect(() => capitalizeWords(Infinity)).toThrow(TypeError);
  expect(() => capitalizeWords({ value: "lowercase" })).toThrow(TypeError);
  expect(() => capitalizeWords(["a", "b", "a"])).toThrow(TypeError);
  expect(() => capitalizeWords(undefined)).toThrow(TypeError);
  expect(() => capitalizeWords(null)).toThrow(TypeError);
});
