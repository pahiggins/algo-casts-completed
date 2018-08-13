// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    const array = [root, '*'];
    const result = [0];

    while (array.length > 1) {
        const firstItem = array.shift();

        if (firstItem === '*') {
            result.push(0);
            array.push(firstItem);
        } else {
            array.push(...firstItem.children);
            result[result.length - 1]++;
        }
    }

    return result;
}

module.exports = levelWidth;
