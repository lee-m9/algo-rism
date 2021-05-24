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
    if (!root) return [];

    const LEVEL_END = "LEVEL_END";
    const counter = [0];
    const queue = [root, LEVEL_END];
    while (queue.length > 1) {
        let node = queue.shift();
        if (node === LEVEL_END) {
            counter.push(0);
            queue.push(LEVEL_END);
        } else {
            counter[counter.length - 1] += 1;
            if (node.children.length) {
                queue.push(...node.children);
            }
        }
    }

    return counter;
}

module.exports = levelWidth;
