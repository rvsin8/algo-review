//Solve Sudoku
//Recursion

//my understanding 


//time complexity 
//O(1)

//space complexity 
//O(1)


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
