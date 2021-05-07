//Remove Islands
//Graphs

//my understanding 

//time complexity 
//O(wh)

//space complexity 
//O(wh)


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
            
        }
    }
}