export function sumOfArray(arr) {
    if (!Array.isArray(arr)) {
        throw TypeError("Must pass array to `sumOfArray`")
    }

    let i = 0;
    for (let item of arr) {
        if (typeof item !== 'number') {
            throw TypeError("Array must only contain numbers")
        }

        i += item;
    }

    return i;
}

export function isPalindrome(str) {
    if (typeof str !== "string") {
        throw TypeError("Must pass string to `isPalindrome`")
    }

    return str.split("").reverse().join() === str;
}

export function capitalizeWords(str) {
    if (typeof str !== "string") {
        throw TypeError("Must pass string to `capitalizeWords`")
    }

    const words = str.split(" ")
    const capitalized = []
    for (let word of words) {
        capitalized.push(word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    }
    
    return capitalized.join(" ")
}

export function purgeDuplicates(arr) {
    if (!Array.isArray(arr)) {
        throw new TypeError("Must pass array to `purgeDuplicates`");
    }

    return Array.from(new Set(arr))
}