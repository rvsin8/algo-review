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

