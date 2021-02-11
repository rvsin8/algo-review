//Search In Sorted Matrix
//Searching

//my understanding
//look for a number in a 2D array aka a matrix
//matrix is sorted, every row and col are sorted in ascending order
//we have a target number and if it is in the matrix then we want the indices at which that matrix is placed
//a sorted matrix can tell us ? we can start from the middle of the matrix which is 33 and it is smaller than our target number which is 44
//this helps us eliminate all the numbers above and to the left of 33 since they are smaller than 44 as well
//we have to search to the right and to the bottom of 33
//it gets rid of the top left corner
//but lets try another way
//start at the top right which is a 1000 and a 1000 is > 44
//it tells us that 44 cannot be in the column bc 1000 is on top so we get rid of an entire column
//move to the left to 15 which is < 44

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