const { sumOfArray } = require("../scripts/index.js");

test("Positive Numbers", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
  expect(sumOfArray([1.2, 2.3, 3.4])).toBe(6.9);
  expect(sumOfArray([0, 0, 0])).toBe(0);
  expect(sumOfArray([5])).toBe(5);
  expect(sumOfArray(Array.from({ length: 100 }, (_, i) => i + 1))).toBe(5050);
});

test("Negative Numbers", () => {
  expect(sumOfArray([-1, -2, -3])).toBe(-6);
  expect(sumOfArray([-1, 2, -3])).toBe(-2);
});

test("Edge Cases", () => {
  expect(sumOfArray([])).toBe(0);
});

test("Invalid Inputs", () => {
  expect(() => sumOfArray("sum")).toThrow(TypeError);
  expect(() => sumOfArray(1, 2)).toThrow(TypeError);
  expect(() => sumOfArray(new Set([1, 2, 3]))).toThrow(TypeError);
  expect(() => sumOfArray([1, undefined, 3])).toThrow(TypeError);
  expect(() => sumOfArray([1, null, 3])).toThrow(TypeError);
  expect(() => sumOfArray([1, true, 3])).toThrow(TypeError);
  expect(() => sumOfArray([1, "two", 3])).toThrow(TypeError);
  expect(() => sumOfArray([1, NaN, 3])).toThrow(TypeError);
  expect(() => sumOfArray([1, Infinity, 3])).toThrow(TypeError);
});
