// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

function matrix(n) {
    let counter = 1;
    let rowStart = 0;
    let columnStart = 0;
    let rowEnd = n - 1;
    let columnEnd = n - 1;
    let results = [];

    //Create Empty n * n matrix array
    for (let i = 0; i < n; i++) {
        results.push([]);
    }

    while (rowStart <= rowEnd && columnStart <= columnEnd) {
        //Fill in TopRow
        for (let col = columnStart; col <= columnEnd; col++) {
            results[rowStart][col] = counter;
            counter++;
        }
        rowStart++;

        //Fill in EndColumn
        for (let row = rowStart; row <= rowEnd; row++) {
            results[row][columnEnd] = counter;
            counter++;
        }
        columnEnd--;

        //Fill in BottomRow
        for (let col = columnEnd; col >= columnStart; col--) {
            results[rowEnd][col] = counter;
            counter++;
        }
        rowEnd--;

        //Fill in StartColumn
        for (let row = rowEnd; row >= rowStart; row--) {
            results[row][columnStart] = counter;
            counter++;
        }
        columnStart++;
    }
    return results;
}

module.exports = matrix;
