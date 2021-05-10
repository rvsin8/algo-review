//Maximum Sum Submatrix
//Dynamic Programming

//my understanding 

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