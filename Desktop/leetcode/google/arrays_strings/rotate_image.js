//You are given an n x n 2D matrix representing an image, rotate the image by 90 degrees (clockwise).
//
//You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. DO NOT allocate another 2D matrix and do the rotation.
//
//Example 1
//Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
//Output: [[7,4,1],[8,5,2],[9,6,3]]
//
//Example 2
//Input: matrix = [[5,1,9,11],[2,4,8,10],[13,3,6,7],[15,14,12,16]]
//Output: [[15,13,2,5],[14,3,4,1],[12,6,8,9],[16,7,10,11]]
//
//Example 3:
//
//Input: matrix = [[1]]
//Output: [[1]]
//
//Example 4:
//
//Input: matrix = [[1,2],[3,4]]
//Output: [[3,1],[4,2]]


//my understanding
//we need to rotate the image in pace, we cannot allocate another 2D matrix
//we are moving clockwise

//we are iterating through ring by ring
//first indx can be our pivot point and most important one its our swapping idx, and we can swap the edges
//we will then swap around the circle, outer ring
//then move to the next ring, inner ring and so on
//O(n), n is the matrix

const swap = (matrix, i, j, k, l) => { //swapping functions that swaps two indices in our matrix
    const temp = matrix[k][l];
    matrix[k][l] = matrix[i][j];
    matrix[i][j] = temp;
}

var rotate = function(matrix) { //established a low and hi bond, basically our dimensions of our 2d matrix
    let lo = 0; //start with the beginning 
    let hi = matrix.length - 1; //dimensions of our matrix, last idx of our matrix

    while(lo < hi){ //we want to keep rotating whenever low is less than high, when its >= to hi that means we are in the middle and no more rotating
        const length = hi - lo; //what is the width of the ring ? or dimensions 

        for (let i = 0; i < length; i++){ //while i is less than length we will keep looping
            const index = lo + i; //lo + i equals to 0 plus i, our swapping position aka our index
            swap(matrix, lo + i, hi, lo, index); //we meed to do three total swaps, we want to swap the top left corner to each corner in every iteration
            swap(matrix, hi, hi - i, lo, index); //bottom right // last row last col is hi hi //we want to change the col not row so hi - i
            swap(matrix, hi - i, lo, lo, index); //last row first col is hi lo //we want to move back towards the 0,0 positions

        }
        
        lo++;
        hi--;
    }
    return matrix;
};