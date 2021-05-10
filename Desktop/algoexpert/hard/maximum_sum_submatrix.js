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
        }

    }
}