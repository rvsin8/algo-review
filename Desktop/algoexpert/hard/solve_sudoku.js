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


//time complexity 
//O(1) we know the size of our input array is always going to be 9x9 a constant size board

//space complexity 
//O(1) we are going to modify the input array


function solveSudoku(board) { //solve the board
    solvePartialSudoku(0, 0, board);
    return board;
}

function solvePartialSudoku(row, col, board) { //helper method that will look at an empty space and determine what is the correct digit that can belong there and will be a recursive function
    let currentRow = row;
    let currentCol = col;

    if (currentCol === board[currentRow].length) { //base case and we want to check if the column that was passed to us is the same length of the board, if we pass col 9 we want to reset our col
        currentRow++; //iterate through a col
        currentCol = 0; //so we can keep track of the col we are at and we reset
        if (currentRow === board.length) return true; //tell us we have solved this problem, that means we finished all of the col and row 
    }

    if (board[currentRow][currentCol] === 0) { //if we are looking at a position at 0
        return tryDigitsAtPosition(currentRow, currentCol, board); 
    }
    
    return solvePartialSudoku(currentRow, currentCol + 1, board); //we use this cause we want to move to the next col
}

function tryDigitsAtPosition(row, col, board) { //try all of the digits at this position
    for (let digit = 1; digit < 10; digit++) { //this is the range we need to view 1-9
        if (isValidAtPosition(digit, row, col, board)) { //if this this digit is valid at the position 
            board[row][col] = digit; //replace that position with that digits
            if (solvePartialSudoku(row, col + 1, board)) return true; //we inserted this digit at that very moment so we need to know if it will true throughout the board
        }
    }
    board[row][col] = 0; //if not true then reset it to 0
    return false; //and return false which says we did not solve this board yet //this helper is the back tracking step
}

function isValidAtPosition(value, row, col, board) { //helper method will tell us if a value is valid in the sudoku board
    const rowIsValid = !board[row].includes(value);//need to check if it is valid in the row so if it is not in the row then it is valid
    const colIsValid = !board.map(r => r[col]).includes(value);//we will get all values at a col and we can see if the value is not in and if true its valid

    if (!rowIsValid || !colIsValid) return false; //if it is not valid then it is false of that value

    const subgridRowStart = Math.floor(row / 3) * 3; //will tell us the starting row of the grid
    const subgridColStart = Math.floor(col / 3) * 3; //will tell us the starting col of the grid
    for (let rowIdx = 0; rowIdx < 3; rowIdx++) { //3 rows in each subgrid
        for (let colIdx = 0; colIdx < 3; colIdx++) { //3 cols in each subgrid
            const rowToCheck = subgridRowStart + rowIdx; //look at this
            const colToCheck = subgridColStart + colIdx; //look at this
            const existingValue = board[rowToCheck][colToCheck]; //check if the value exists

            if (existingValue === value) return false; //is going to look through the subgrid and see if the value already exists
        }
    }
    return true; //if all criteria is met then return true

}
