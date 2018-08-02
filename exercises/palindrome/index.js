// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
    const strArray = [...str];
    const reversedStr = strArray.reverse().join('');

    return str === reversedStr;
}

const result = palindrome('abba');
console.log(result);

module.exports = palindrome;
