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
//the middle num in the array will have the same number of greater nums and smaller numbs
//distinct values help bc dups can make a tree unbalanced bc they can only go on one side
//insert the middle num which is 10 -->[1,2,5,7,10,13,14,15,22]
//okay now 10 is our root, what is our left root ? to the left of 10 we have [1,2,5,7] so its either 2 or 5 --> can go either way just keep picking the mid value
//okay now 10 is our root, what is our right root ? to the left of 10 we have [1,2,5,7] so its either 14 or 15 --> can go either way just keep picking the mid value

//time complexity 
//O(n) pass down the current node we are at and we are manually going to insert the nodes without using the insert method

//space complexity
//O(n) n is the length of the array and we will have a bst of length n

function minHeightBst(array) {
    return constructMinHeightBst(array, 0, array.length - 1); //helper
}

function constructMinHeightBst(array, startIdx, endIdx) { //helper function
    if (endIdx < startIdx) return null; //when the ending idx gets smaller than the starting then we want to break out
    const midIdx = Math.floor((startIdx + endIdx) / 2); //how to find the middle idx
    const bst = new BST(array[midIdx]); //creating a new bst starting with the mid idx as the root node
    bst.left = constructMinHeightBst(array, startIdx, midIdx - 1); //construct the left side
    bst.right = constructMinHeightBst(array, midIdx + 1, endIdx); //construct the right side
    return bst;
}
