// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseStr(strArray) {
    return strArray.reverse().join('');
}

function reverseInt(n) {
    const str = n.toString();
    const strArray = [...str];

    if (strArray[0] === '-') {
        const reversedStr = reverseStr(strArray);
        return parseInt(`-${reversedStr}`);
    } else {
        const reversedStr = reverseStr(strArray);
        return parseInt(reversedStr);
    }
}

const result = reverseInt(-123);
console.log(result);

module.exports = reverseInt;
