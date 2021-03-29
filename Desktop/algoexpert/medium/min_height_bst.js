//Min Height BST
//Binary Search Tree

//my understanding 
//classic bst question
//write a function that will return a built bst from the array of integers returning the root of the bst
//we want to minimize the height of the bst
//we have an insert method for free
//height is the length of the longest branch or depth of the deepest node 
//remember our array is sorted
//what does it mean for a tree to have minimal height? means the bst must be as balanced as possible, we need as many nodes in the left as the right
//we need every node that follows the bst property - for any node, every node to its left that is smaller to its right node, so we need num of greater and number of less than equal to our root node
//the array being in sorted order tells us which values are smaller or greater than some values
//

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
