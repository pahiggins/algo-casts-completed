// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function generateCharMap(str) {
    const formattedStr = str.replace(/[^\w]/g, '').toLowerCase();
    const charMap = {};

    for (let char of formattedStr) {
        charMap[char] = charMap[char] + 1 || 1;
    }

    return charMap;
}

function isEquivalent(a, b) {
    // Create arrays of property names
    var aProps = Object.getOwnPropertyNames(a);
    var bProps = Object.getOwnPropertyNames(b);

    // If number of properties is different,
    // objects are not equivalent
    if (aProps.length != bProps.length) {
        return false;
    }

    for (var i = 0; i < aProps.length; i++) {
        var propName = aProps[i];

        // If values of same property are not equal,
        // objects are not equivalent
        if (a[propName] !== b[propName]) {
            return false;
        }
    }

    // If we made it this far, objects
    // are considered equivalent
    return true;
}

function anagrams(stringA, stringB) {
    const charMapA = generateCharMap(stringA);
    const charMapB = generateCharMap(stringB);

    return isEquivalent(charMapA, charMapB);
}

const result = anagrams('RAIL! SAFETY!', 'fairy tales');
// console.log(result);

module.exports = anagrams;
