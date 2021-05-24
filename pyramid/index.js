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
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
//   pyramid(4)
//       '   #   '
//       '  ###  '
//       ' ##### '
//       '#######'

function pyramid(n, row = 0, level = "") {
    if (n === row) return;

    if (level.length === 2 * n - 1) {
        console.log(level);
        return pyramid(n, row + 1);
    }

    const midpoint = n - 1;
    if (level.length >= midpoint - row && level.length <= midpoint + row) {
        level += "#";
    } else {
        level += " ";
    }

    pyramid(n, row, level);
}

module.exports = pyramid;

//Alternate Solutions

// function pyramid(n) {
//     if (n < 0) return;

//     for (let row = 0; row < n; row++) {
//         let block = "";
//         let spaces = n - row - 1;
//         let hashCount = row + row + 1;
//         let repeat = false;
//         for (let column = 0; column < n + n - 1; column++) {
//             if (block.length === spaces || repeat) {
//                 block += "#";
//                 hashCount--;
//                 repeat = !hashCount == 0;
//             } else {
//                 block += " ";
//             }
//         }
//         console.log(block);
//     }
// }

// function pyramid(n) {
//     if (n < 0) return;

//     for (let row = 0; row < n; row++) {
//         let step = "";
//         for (let column = 1; column <= n + n - 1; column++) {
//             if (column >= n - row && column <= n + row) {
//                 step += "#";
//             } else {
//                 step += " ";
//             }
//         }
//         console.log(step);
//     }
// }
