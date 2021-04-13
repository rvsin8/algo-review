//Same BSTs
//Binary Search Trees

//my understandings
//a bst is a binary tree where every node in the bst satisfies the bst properties - every node that comes to the left subtree has to have a value less, right subtree has to have a value greater than the parent node
//we get two arrays of integers and write a function that lets us know if the two arrays represent the same bst tree
//array1: [10,15,8,12,94,81,5,2,11]
//array2: [10,8,5,15,2,12,11,94,81]
//true is the answer
//if the first value is not the same then it does not represent the same bst bc they are root values
//we separate the values greater / less our root node
//[8,5,2] and [8,5,2] are both the same values less than the root node in both arrays
//check for the left subtree and if none are there than we look for the values less than 8 --> [5,2]
//do the same thing --> [2] and [2]
//greater than our root node aka 10 --> [15,12,94,81,11] and [15,12,11,94,81], these arrays are not the same so we cannot compare them
//grab the left and right subtrees --> left subtree [12,11] and [12,11] and further apply this logic [11] and [11]
//right subtree --> [94, 81] and [94, 81]
//space complexity - O(n^2) we are creating a lot of extra arrays
//better way in space complexity bc we don't have to store the array via O(d) via recursion
//we pass in a pointer with the roots we are asked at 10,8,5,2 and same for greater
//

//time complexity
//O(n^2) start at length N, you iterate through it twice to find values less and greater than the root node

//space complexity
//O(d) d is the depth of the bst represented via no extra space 

function sameBsts(arrayOne, arrayTwo) {
    return areSameBsts(arrayOne, arrayTwo, 0, 0, -Infinity, Infinity);
}

function areSameBsts(arrayOne, arrayTwo, rootIdxOne, rootIdxTwo, minVal, maxVal) {
    if (rootIdxOne === -1 || rootIdxTwo === -1) return rootIdxOne === rootIdxTwo;

    if (arrayOne[rootIdxOne] !== arrayTwo[rootIdxTwo]) return false;

    const leftRootIdxOne = getIdxOfFirstSmaller(arrayOne, rootIdxOne, minVal);
    const leftRootIdxTwo = getIdxOfFirstSmaller(arrayTwo, rootIdxTwo, minVal);
    const rightRootIdxOne = getIdxOfBiggerOrEqual(arrayOne, rootIdxOne, maxVal);
    const rightRootIdxTwo = getIdxOfFirstBiggerOrEqual(arrayTwo, rootIdxTwo, maxVal);

    const currentValue = arrayOne[rootIdxOne];
    const leftAreSame = areSameBsts(arrayOne, arrayTwo, leftRootIdxOne, leftRootIdxTwo, minVal, currentValue);
    const rightAreSame = areSameBsts(arrayOne, arrayTwo, rightRootIdxOne, rightRootIdxTwo, currentValue, maxVal);

    return leftAreSame && rightAreSame;

}

function getIdxOfFirstSmaller(array, startingIdx, minVal) {
    for (let i = startingIdx + 1; i < array.length; i++) {
        if (array[i] < array[startingIdx] && array[i] >= minVal) return i;
    }
    return -1;
}

function getIdxOfFirstBiggerOrEqual(array, startingIdx, maxVal) {
    for (let i = startingIdx + 1; i < array.length; i++) {
        if (array[i] >= array[startingIdx] && array[i] >= maxVal) return i;
    }
    return -1;
}