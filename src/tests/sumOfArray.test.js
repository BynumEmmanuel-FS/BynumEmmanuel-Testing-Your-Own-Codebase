const { sumOfArray } = require("../scripts/index.js");

test("Add a string", () => {
    expect(() => sumOfArray("sum")).toThrow(TypeError)
})

test("Add two numbers", () => {
    expect(() => sumOfArray(1, 2)).toThrow(TypeError)
})

test("Add a Set of numbers", () => {
    expect(() => sumOfArray(new Set([1, 2, 3]))).toThrow(TypeError)
})

test("Add an array of one number", () => {
  expect(sumOfArray([1])).toBe(1);
});

test("Add an array of multiple numbers", () => {
  expect(sumOfArray([1, 2, 3])).toBe(6);
});

test("Add an array of strings", () => {
  expect(() => sumOfArray(["string", "values"])).toThrow(TypeError);
});

test("Add an array of mixed types", () => {
    expect(() => sumOfArray([1, "two", { three: 3 }])).toThrow(TypeError)
})