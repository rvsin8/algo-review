//Solve Sudoku
//Recursion

//my understanding 
//we are given a 2D array that will have 9 subarrays that will contain 9 elements from a range 0-9
//0 will be an empty digit
//a sudoku puzzle contains 9 subgrids that can only contain 1-9 integers 
//we cannot have the same digits in the same grid, col or row
//can modify this in place

//my solution
//each empty place has 9 opportunity in digits
//cannot use brute force bc we would have to create every board imagined and see what board follows the rules and this cannot be done efficient at all
//use back-tracking when a square has trouble filling up and back track is the way we will find the solution
//


//time complexity 
//O(1) we know the size of our input array is always going to be 9x9 a constant size board

//space complexity 
//O(1) we are going to modify the input array


function solveSudoku(board) {
    solvePartialSudoku(0, 0, board);
    return board;
}

function solvePartialSudoku(row, col, board) {
    let currentRow = row;
    let currentCol = col;

    if (currentCol === board[currentRow].length) {
        currentRow++;
        currentCol = 0;
        if (currentRow === board.length) return true;
    }

    if (board[currentRow][currentCol] === 0) {
        return tryDigitsAtPosition(currentRow, currentCol, board);
    }
    
    return solvePartialSudoku(currentRow, currentCol + 1, board);
}

function tryDigitsAtPosition(row, col, board) {
    for (let digit = 1; digit < 10; digit++) {
        if (isValidAtPosition(digit, row, col, board)) {
            board[row][col] = digit;
            if (solvePartialSudoku(row, col + 1, board)) return true;
        }
    }
    board[row][col] = 0;
    return false;
}

function isValidAtPosition(value, row, col, board) {
    const rowIsValid = !board[row].includes(value);
    const colIsValid = !board.map(r => r[col]).includes(value);

    if (!rowIsValid || !colIsValid) return false;

    const subgridRowStart = Math.floor(row / 3) * 3;
    const subgridColStart = Math.floor(col / 3) * 3;
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) {
        for (let colIdx = 0; colIdx < 3; colIdx++) {
            const rowToCheck = subgridRowStart + rowIdx;
            const colToCheck = subgridColStart + colIdx;
            const existingValue = board[rowToCheck][colToCheck];

            if (existingValue === value) return false;
        }
    }
    return true;

}
