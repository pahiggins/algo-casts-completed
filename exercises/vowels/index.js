// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

function vowels(str) {
    const matches = str.match(/[aeiou]/gi);
    return matches ? matches.length : 0;
}

const result = vowels('This is a test!');
console.log(result);

// function vowels(str) {
//     const strLowerCase = str.toLowerCase();
//     const strArray = [...strLowerCase];
//     const vowels = ['a', 'e', 'i', 'o', 'u'];

//     const strArrayFiltered = strArray.filter(char => vowels.includes(char));
//     return strArrayFiltered.length;
// }

// const result = vowels('This is a test!');
// console.log(result);

module.exports = vowels;
