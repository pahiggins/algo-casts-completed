// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
    const chunked = [];
    let index = 0;

    while (index < array.length) {
        const chunk = array.slice(index, index + size);
        chunked.push(chunk);
        index = index + size;
    }

    return chunked;
}

// function chunk(array, size) {
//     const chunked = [];

//     for (let el of array) {
//         const lastEl = chunked[chunked.length - 1];

//         if (!lastEl || lastEl.length === size) {
//             chunked.push([el]);
//         } else {
//             lastEl.push(el);
//         }
//     }

//     return chunked;
// }

const result = chunk([1, 2, 3], 2);
console.log(result);

module.exports = chunk;
