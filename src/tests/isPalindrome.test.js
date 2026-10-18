const { isPalindrome } = require("../scripts/index.js");

test("Palindrome", () => {
  expect(isPalindrome("racecar")).toBeTruthy();
  expect(isPalindrome("noon")).toBeTruthy();
  expect(isPalindrome("I")).toBeTruthy();
  expect(isPalindrome("aa")).toBeTruthy();
  expect(isPalindrome("A man a plan a canal Panama")).toBeTruthy();
  expect(isPalindrome("12321")).toBeTruthy();
});

test("Non-Palindrome", () => {
  expect(isPalindrome("car")).toBeFalsy();
  expect(isPalindrome("race")).toBeFalsy();
  expect(isPalindrome("ab")).toBeFalsy();
  expect(isPalindrome("A man plan a canal Panama")).toBeFalsy();
  expect(isPalindrome("123421")).toBeFalsy();
});

test("Edge Case", () => {
  expect(isPalindrome("")).toBeFalsy();
  expect(isPalindrome(" ")).toBeFalsy();
  expect(isPalindrome("aaaaaa")).toBeTruthy();
  expect(isPalindrome("Race Car")).toBeTruthy();
  expect(isPalindrome("Race, Car!")).toBeTruthy();
  expect(isPalindrome("Rat-Tar")).toBeTruthy();
  expect(isPalindrome("race\tcar")).toBeTruthy();
  expect(isPalindrome("race\ncar")).toBeTruthy();
  expect(isPalindrome("race_car")).toBeTruthy();
  expect(isPalindrome("\tradar\n")).toBeTruthy();
  expect(isPalindrome("not\ta\tpalindrome")).toBeFalsy();
  expect(isPalindrome("A\tman,\na plan_a canal: Panama!")).toBeTruthy();
});

test("Invalid Inputs", () => {
  expect(() => isPalindrome(0)).toThrow(TypeError);
  expect(() => isPalindrome(12321)).toThrow(TypeError);
  expect(() => isPalindrome(NaN)).toThrow(TypeError);
  expect(() => isPalindrome(Infinity)).toThrow(TypeError);
  expect(() => isPalindrome(undefined)).toThrow(TypeError);
  expect(() => isPalindrome(null)).toThrow(TypeError);
  expect(() => isPalindrome(["a", "b", "a"])).toThrow(TypeError);
});
