function sumOfArray(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Must pass array to `sumOfArray`");
  }

  let i = 0;
  for (let item of arr) {
    if (typeof item !== "number" || isNaN(item) || !isFinite(item)) {
      throw new TypeError("Array must only contain numbers");
    }

    i += item;
  }

  return i;
}

function isPalindrome(str) {
  if (typeof str !== "string") {
    throw new TypeError("Must pass string to `isPalindrome`");
  }

  return str.split("").reverse().join() === str;
}

function capitalizeWords(str) {
  if (typeof str !== "string") {
    throw new TypeError("Must pass string to `capitalizeWords`");
  }

  const words = str.split(" ");
  const capitalized = [];
  for (let word of words) {
    capitalized.push(
      word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
    );
  }

  return capitalized.join(" ");
}

function purgeDuplicates(arr) {
  if (!Array.isArray(arr)) {
    throw new TypeError("Must pass array to `purgeDuplicates`");
  }

  return Array.from(new Set(arr));
}

module.exports = {
  sumOfArray,
  isPalindrome,
  capitalizeWords,
  purgeDuplicates,
};
