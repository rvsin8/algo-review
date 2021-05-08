//Remove Islands
//Graphs

//my understanding
//we are given an input matrix aka a 2D array made up of only 1s and 0s
//0 = white and 1 = black
//an island is any number of 1 that are adjacaent or vertical, not on edges
//output has to be the islands replaced by 0s

//easiest way
//loop through the entire array
//when we hit a 1 we will do a check and perform a function
//look at the 1's neighbors
//do this for all positions
//once we find an island we replace it with a 0
//we keep doing this 

//clever solution 1
//


//time complexity 
//O(wh)

//space complexity 
//O(wh)
//there is one that runs in constant space but its too complicated


function removeIslands(matrix) {
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const rowIsBorder = row === 0 || row === matrix.length - 1;
            const colIsBorder = col === 0 || col === matrix[row].length - 1;
            const isBorder = rowIsBorder || colIsBorder;

            if (!isBorder) continue;

            if (matrix[row][col] != 1) continue;

            changeOnesConnectedToBorderToTwos(martrix, row, col);

        }
    }
    for (let row = 0; row < matrix.length; row++) {
        for (let col = 0; col < matrix[row].length; col++) {
            const color = matrix[row][col];
            if (color === 1) {
                matrix[row][col] = 0;

            } else if (color === 2) {
                matrix[row][col] = 1;
            }
        }
    }
    return matrix;
}

function changeOnesConnectedToBorderToTwos(matrix, startRow, startCol) {
    const stack = [[startRow, startCol]];

    while (stack.length > 0) {
        const currentPosition = stack.pop();
        const [currentRow, currentCol] = currentPosition;

        matrix[currentRow][currentCol] = 2;

        const neighbors = getNeighbors(matrix, currentRow, currentCol);
        for (const neighbor of neighbors) {
            const [row, col] = neighbor;

            if (matrix[row][col] != 1) continue;

            stack.push(neighbor);
        }
    }
}

function getNeighbors(matrix, row, col) {
    const neighbors = [];

    const numRows = matrix.length;
    const numCols = matrix[row].length;

    if (row - 1 >= 0) neighbors.push([row - 1, col]); //UP
    if (row + 1 < numRows) neighbors.push([row + 1, col]); //DOWN
    if (col - 1 >= 0) neighbors.push([row, col - 1]); //LEFT
    if (col + 1 < numCols) neighbors.push([row, col + 1]); //RIGHT

    return neighbors;
}