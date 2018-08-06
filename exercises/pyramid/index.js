// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'

// function pyramid(n) {
//     const midpoint = Math.floor((n * 2 - 1) / 2);

//     for (let row = 0; row < n; row++) {
//         let string = '';

//         for (let col = 0; col < (n * 2 - 1); col++) {
//             if (midpoint - row <= col && midpoint + row >= col) {
//                 string += '#';
//             } else {
//                 string += ' ';
//             }
//         }
//         console.log(string);
//     }
// }

function recursivePyramid(n, row = 0, string = '') {
    if (n === row) {
        return;
    }

    if (string.length === 2 * n - 1) {
        console.log(string);
        return recursivePyramid(n, row + 1);
    }

    const midpoint = Math.floor((n * 2 - 1) / 2);
    const add = midpoint - row <= string.length && midpoint + row >= string.length ? '#' : ' ';

    recursivePyramid(n, row, string + add);
}

recursivePyramid(5);

// pyramid(4);

module.exports = recursivePyramid;
