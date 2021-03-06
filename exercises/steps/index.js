// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// function steps(n) {
//     for (let row = 0; row < n; row++) {
//         let string = '';
//         for (let col = 0; col < n; col++) {
//             if (col <= row) {
//                 string += '#';
//             } else {
//                 string += ' ';
//             }
//         }
//         console.log(string);
//     }
// }

function recursiveSteps(n, row = 0, string = '') {
    if (n === row) {
        return;
    }

    if (n === string.length) {
        console.log(string);
        return recursiveSteps(n, row + 1);
    }

    const add = string.length <= row ? '#' : ' ';

    recursiveSteps(n, row, string + add);
}

// const result = steps(5);
recursiveSteps(5);

module.exports = recursiveSteps;
