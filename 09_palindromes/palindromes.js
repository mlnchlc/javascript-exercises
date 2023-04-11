function isLetter(c) {
    return c.toLowerCase() != c.toUpperCase();
}

const palindromes = function (word) {
    word = word.toUpperCase();
    let right = word.length - 1;
    let left = 0;

    while (!isLetter(word.charAt(right))) right--;
    while (!isLetter(word.charAt(left))) left++;

    while (right > left) {
        if (word.charAt(right) != word.charAt(left))
            return false;
        right--;
        left++;
        while (!isLetter(word.charAt(right))) right--;
        while (!isLetter(word.charAt(left))) left++;
    }
    return true;
};

// Do not edit below this line
module.exports = palindromes;
