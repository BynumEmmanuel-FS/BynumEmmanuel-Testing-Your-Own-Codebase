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

  const normalize = str
    .replace(/[^\w\s]|_/g, "")
    .trim()
    .toLowerCase()
    .split(" ")
    .join("");
  if (normalize === "") {
    return false;
  }

  return normalize === normalize.split("").reverse().join("");
}

function capitalizeWords(str) {
  if (typeof str !== "string") {
    throw new TypeError("Must pass string to `capitalizeWords`");
  }

  const words = str.split(" ");
  const capitalized = [];
  let ignore = false;
  
  for (let word of words) {
    if (word.includes("[") || word.includes("{")) {
      ignore = true;
    }

    if (ignore) {
      capitalized.push(word);
    } else {
      capitalized.push(
        word.charAt(0).toUpperCase() + word.slice(1).toLowerCase(),
      );
    }

    if (word.includes("]") || word.includes("}")) {
      ignore = false;
    }
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
