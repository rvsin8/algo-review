//Same BSTs
//Binary Search Trees

//my understandings

//time complexity

//space complexity 

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