//Min Height BST
//Binary Search Tree

//my understanding 
//classic bst question
//write a function that will return a built bst from the array of integers returning the root of the bst
//we want to minimize the height of the bst
//we have an insert method for free

//time complexity 
//O(n)

//space complexity
//O(n)

function minHeightBst(array) {
    return constructMinHeightBst(array, 0, array.length - 1);
}

function constructMinHeightBst(array, startIdx, endIdx) {
    if (endIdx < startIdx) return null;
    const midIdx = Math.floor((startIdx + endIdx) / 2);
    const bst = new BST(array[midIdx]);
    bst.left = constructMinHeightBst(array, startIdx, midIdx - 1);
    bst.right = constructMinHeightBst(array, midIdx + 1, endIdx);
    return bst;
}
