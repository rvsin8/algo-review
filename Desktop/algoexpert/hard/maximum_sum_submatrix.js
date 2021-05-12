//Maximum Sum Submatrix
//Dynamic Programming

//my understanding 
//we are given two inputs - first is a matrix aka 2d array and has unequal height and weight
//another input called size that will be an integer
//we want the max sum submatrix
//we want to add them by the size so if its 2 then the size by size is 4


//brute force
//h is rows and w is columns
//time complexity is width * height * size^2, disgusting
//loop through the matrix and add all matrices 
//when we calculate these sums then we 

//time complexity 
//O(w * h)

//space complexity 
//O(w * h)


function maximumSumSubmatrix(matrix, size) {
    const sums = createSumMatrix(matrix); //create an array that stores sums
    let maxSubMatrixSum = -Infinity; //set it to float -infinity 

    for (let row = size - 1; row < matrix.length; row++) { //for loop 
        for (let col = size - 1; col < matrix[row].length; col++) { //for loop
            let total = sums[row][col]; //total is the sum of the row and col

            const touchesTopBorder = row - size < 0; //if we are touching the top border
            if (!touchesTopBorder) total -= sums[row - size][col]; //if not touching the top border we will subtract all of the things above us we need to remove

            const touchesLeftBorder = col - size < 0; //same for left
            if (!touchesLeftBorder) total -= sums[row][col - size]; //if not touching do the same

            const touchesTopOrLeftBorder = touchesTopBorder || touchesLeftBorder; //if we tough both, overlap
            if (!touchesTopOrLeftBorder) total += sums[row - size][col - size]; //we need to add back the overlap values

            maxSubMatrixSum = Math.max(maxSubMatrixSum, total);
        }

    }
    return maxSubMatrixSum;
}

function createSumMatrix(matrix) {
    const sums = []; //empty array
    for (let row = 0; row < matrix.length; row++) { //initializing a new structure
        sums.push([]); //exact same size and shape as our original matrix filled with 0
        for (let col = 0; col < matrix[row].length; col++) {
            sums[row].push(0);
        }
    }
    sums[0][0] = matrix[0][0];

    for (let idx = 1; idx < matrix[0].length; idx++) { //first row 
        sums[0][idx] = sums[0][idx - 1] + matrix[0][idx]; //looking at previous sum and adding the ele we are considering 
    }

    for (let idx = 1; idx < matrix.length; idx++) { //first col
        sums[idx][0] = sums[idx - 1][0] + matrix[idx][0];
    }

    for (let row = 1; row < matrix.length; row++) { //rest of the matrix
        for (let col = 1; col < matrix[row].length; col++) {
            sums[row][col] = sums[row - 1][col] + sums[row][col - 1] - sums[row - 1][col - 1] + matrix[row][col];
        }
    }
    return sums; //return sums lmao
}