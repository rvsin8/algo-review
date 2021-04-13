//Same BSTs
//Binary Search Trees

//my understandings
//a bst is a binary tree where every node in the bst satisfies the bst properties - every node that comes to the left subtree has to have a value less, right subtree has to have a value greater than the parent node
//we get two arrays of integers and write a function that lets us know if the two arrays represent the same bst tree
//array1: [10,15,8,12,94,81,5,2,11]
//array2: [10,8,5,15,2,12,11,94,81]
//true is the answer
//

//time complexity
//O(n^2)

//space complexity
//O(d) 

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