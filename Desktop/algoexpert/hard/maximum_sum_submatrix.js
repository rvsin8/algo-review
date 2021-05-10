//Maximum Sum Submatrix
//Dynamic Programming

//my understanding 
//we are given two inputs - first is a matrix aka 2d array and has unequal height and weight
//another input called size that will be an integer
//we want the max sum submatrix
//we want to add them by the size so if its 2 then the size by size is 4
//

//time complexity 

//space complexity 


function maximumSumSubmatrix(matrix, size) {
    const sums = createSumMatrix(matrix);
    let maxSubMatrixSum = -Infinity;

    for (let row = size - 1; row < matrix.length; row++) {
        for (let col = size - 1; col < matrix[row].length; col++) {
            let total = sums[row][col];

            const touchesTopBorder = row - size < 0;
            if (!touchesTopBorder) total -= sums[row - size][col];

            const touchesLeftBorder = col - size < 0;
            if (!touchesLeftBorder) total -= sums[row][col - size];

            const touchesTopOrLeftBorder = touchesTopBorder || touchesLeftBorder;
            if (!touchesTopOrLeftBorder) total += sums[row - size][col - size];

            maxSubMatrixSum = Math.max(maxSubMatrixSum, total);
        }

    }
    return maxSubMatrixSum;
}