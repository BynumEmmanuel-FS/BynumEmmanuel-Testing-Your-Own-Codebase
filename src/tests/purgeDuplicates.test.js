const { purgeDuplicates } = require("../scripts/index.js");

test("Single-Typed Arrays", () => {
  expect(purgeDuplicates(["a", "a", "b", "b", "c", "c"])).toStrictEqual([
    "a",
    "b",
    "c",
  ]);
  expect(purgeDuplicates([1, 1, 2, 2, 3, 3])).toStrictEqual([1, 2, 3]);
  expect(purgeDuplicates([true, false, true, false])).toStrictEqual([
    true,
    false,
  ]);
});

test("Multiple-Typed Arrays", () => {
  expect(
    purgeDuplicates(["a", 1, true, "a", 1, true, "a", 1, true]),
  ).toStrictEqual(["a", 1, true]);
});

test("Edge Cases", () => {
  expect(purgeDuplicates([])).toStrictEqual([]);
  expect(purgeDuplicates([1])).toStrictEqual([1]);
  expect(purgeDuplicates([1, 1, 1, 1, 1])).toStrictEqual([1]);
  expect(purgeDuplicates([NaN, NaN])).toStrictEqual([NaN]);
  expect(purgeDuplicates([undefined, null, undefined, null])).toStrictEqual([
    undefined,
    null,
  ]);

  class Char {
    constructor(value) {
      this.value = value;
    }
  }

  const charArray = [
    new Char("a"),
    new Char("b"),
    new Char("c"),
    new Char("a"),
    new Char("b"),
    new Char("c"),
  ];
  expect(
    purgeDuplicates([...charArray.slice(0, 3), ...charArray.slice(0, 3)]),
  ).toStrictEqual(charArray.slice(0, 3));
  expect(purgeDuplicates(charArray)).toStrictEqual(charArray);
});

test("Invalid Inputs", () => {
  expect(() => purgeDuplicates("string")).toThrow(TypeError);
  expect(() => purgeDuplicates(123456)).toThrow(TypeError);
  expect(() => purgeDuplicates(NaN)).toThrow(TypeError);
  expect(() => purgeDuplicates(Infinity)).toThrow(TypeError);
  expect(() => purgeDuplicates({ value: "object" })).toThrow(TypeError);
  expect(() => purgeDuplicates(undefined)).toThrow(TypeError);
  expect(() => purgeDuplicates(null)).toThrow(TypeError);
});
