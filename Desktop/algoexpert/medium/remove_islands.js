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
//we can start by looping through the first row, first col, last row and last col
//we find all ones connected to the ones at these edges
//we store their positions and then loop through the interior 1 that are not connected to the edges and replace it with 0
//create another 2D array that is identical to this array but have them all to false values
//by doing this we can look at corresponding values via DFS
//whatever is a true value are not islands so we keep those values
//when we see the 1's that are false - we replace it with 0's

//clever solution 2
//instead of creating a ds with true and flase values
//we can replace all the edges 1 with 2
//replace the 1's connected to the 1 on the edges with 2 as well
//we replace all 2's with 1's and all 1's with 0's

//time complexity 
//O(wh) where w id width and h is height, at most we can look at every position

//space complexity 
//O(wh) where w is width and h is height, we have to create another ds the same exact size of our original array
//there is one that runs in constant space but its too complicated
//for solution 2 we use DFS which uses a stack 


function removeIslands(matrix) {
    for (let row = 0; row < matrix.length; row++) { //
        for (let col = 0; col < matrix[row].length; col++) {
          const rowIsBorder = row === 0 || row === matrix.length - 1; //return a boolean that lets us know if we are at the border for row
          const colIsBorder = col === 0 || col === matrix[row].length - 1; //return a boolean that lets us know if we are at the border for col
          const isBorder = rowIsBorder || colIsBorder; //border boolean

          if (!isBorder) continue; //if it is not on a border then continue 

          if (matrix[row][col] != 1) continue; //if it is equal to a 1 we look for other ones so continue

          changeOnesConnectedToBorderToTwos(martrix, row, col); //helper that changes the 1's to 2's
        }
    }
    for (let row = 0; row < matrix.length; row++) { //entire input matrix
        for (let col = 0; col < matrix[row].length; col++) { //entire input matrix 
            const color = matrix[row][col]; //position
            if (color === 1) {
                matrix[row][col] = 0; //change 1 to 0

            } else if (color === 2) {
                matrix[row][col] = 1; //change 2 to 1
            }
        }
    }
    return matrix; //return our matrix
}

function changeOnesConnectedToBorderToTwos(matrix, startRow, startCol) {
    const stack = [[startRow, startCol]]; //initialize a stack

    while (stack.length > 0) {
        const currentPosition = stack.pop(); //pop the most recent ele
        const [currentRow, currentCol] = currentPosition; //get current row and current col

        matrix[currentRow][currentCol] = 2; //mark for us the current integer to 2

        const neighbors = getNeighbors(matrix, currentRow, currentCol);
        for (const neighbor of neighbors) {
            const [row, col] = neighbor;

            if (matrix[row][col] != 1) continue; //

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