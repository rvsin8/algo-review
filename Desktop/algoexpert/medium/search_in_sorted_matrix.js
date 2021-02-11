//Search In Sorted Matrix
//Searching

//my understanding
//look for a number in a 2D array aka a matrix
//matrix is sorted, every row and col are sorted in ascending order
//we have a target number and if it is in the matrix then we want the indices at which that matrix is placed



//time complexity 
//O(n + m)

//space complexity
//O(1)

function searchInSortedMatrix(matrix, target) {
    let row = 0;
    let col = matrix[0].length - 1;
    while (row < matrix.length && col >= 0) {
        if (matrix[row][col] > target) {
            col--;
        } else if (matrix[row][col] < target) {
            row++;
        } else {
            return [row, col];
        }
    }
    return [-1, -1];
}