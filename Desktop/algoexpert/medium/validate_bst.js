//Validate BST
//Binary Search Trees

//my notes
//this question will take in a data structure like a binary tree
//the data structure contains nodes or node values
//the question wants to know if the data structure is a bst
//a bst is a ds in which every node is strictly greater than its left values and a value less/equal of its right nodes


//divide and conquer approach
//go down each node and validate their left / right trees
//each node has a min / max value, for example for 5, min value would be 5 and 10 is the greatest val bc its the root node
//5 <= node.value < 10
//we might need a helper function that takes the parent node
//when we call it on the left side of the node we will change the min val to 5 and max to 10 which was the parent node 
//we will validate every subtree using this algo
// -inf <= node.value < 10

//time complexity
//O(N) where n is the number of nodes of the bst, every operation is constant time

//space complexity 
//O(d) space where d is the depth on the bst, we are using space on the call stack
//the depth of the tree is the length of the longest branch


function validateBst(tree) {
    return validateBstHelper(tree, -Infinity, Infinity); //we need a helper funct to keep track of left anf right nodes //take in a tree with a min and max val --> -infinity/infinity
}

function validateBstHelper(tree, minValue, maxValue){ //helper function takes in a tree, min and max value
    if (tree === null) return true; //we have hit the bottom of the tree and its true
    if (tree.value < minValue || tree.value >= maxValue) return false; //we want to make sure the node value is in between the min and max value, so if its less than the min val or exceeds the max value then we return false
    const leftIsValid = validateBstHelper(tree.left, minValue, tree.value); //call the helper on the left subtree to see if its valid
    return leftIsValid && validateBstHelper(tree.right, tree.value, maxValue); //we also want to see if the right subtree is valid
}