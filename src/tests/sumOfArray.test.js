const { sumOfArray } = require("../scripts/index.js");

test("Add an array of positive numbers", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
});

test("Add an array of negative numbers", () => {
  expect(sumOfArray([-1, -2, -3])).toBe(-6);
});

test("Add an array of positive and negative numbers", () => {
  expect(sumOfArray([-1, 2, -3])).toBe(-2);
});

test("Add an array of floats", () => {
  expect(sumOfArray([1.2, 2.3, 3.4])).toBe(6.9);
});

test("Add an array of zeroes", () => {
  expect(sumOfArray([0, 0, 0])).toBe(0);
});

test("Add an empty array", () => {
  expect(sumOfArray([])).toBe(0);
});

test("Add an array with one number", () => {
  expect(sumOfArray([5])).toBe(5);
});

test("Add an array of numbers 1-100", () => {
  expect(sumOfArray(Array.from({ length: 100 }, (_, i) => i + 1))).toBe(5050);
});

test("Add a string", () => {
  expect(() => sumOfArray("sum")).toThrow(TypeError);
});

test("Add two numbers", () => {
  expect(() => sumOfArray(1, 2)).toThrow(TypeError);
});

test("Add a Set of numbers", () => {
  expect(() => sumOfArray(new Set([1, 2, 3]))).toThrow(TypeError);
});

test("Add an array with undefined", () => {
  expect(() => sumOfArray([1, undefined, 3])).toThrow(TypeError);
});

test("Add an array with null", () => {
  expect(() => sumOfArray([1, null, 3])).toThrow(TypeError);
});

test("Add an array with boolean", () => {
  expect(() => sumOfArray([1, true, 3])).toThrow(TypeError);
});

test("Add an array with string", () => {
  expect(() => sumOfArray([1, "two", 3])).toThrow(TypeError);
});

test("Add an array with NaN", () => {
  expect(() => sumOfArray([1, NaN, 3])).toThrow(TypeError);
});

test("Add an array with Infinity", () => {
  expect(() => sumOfArray([1, Infinity, 3])).toThrow(TypeError);
});
