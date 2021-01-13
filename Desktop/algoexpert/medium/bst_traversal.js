//BST Traversal 
//Binary Search Trees

//my notes
//in-order: [1,2,5,5,10,15,22]
//pre-order: [10,5,2,1,5,15,22]
//post-order: [1,2,5,5,22,15,10]
//in-order traversal - wants you to traverse the bst in order, as in ascending order, we look at the left node first, then the current node and then the right node. 
//inorder traverse(left); array.append(current val); inorder traverse(right) //core logic for these traversals
//for pre/post order we will change these three steps order ^
//for pre array append will be first
//for post it will be last array append

//time complexity 
//O(n) bc we need to traverse every single node

//space complexity
//O(n) bc we are creating an array of length n where we are storing all these values

function inOrderTraverse(tree, array){
    if (tree !== null) { //if the tree is not none, we will do some tings
        inOrderTraverse(tree.left, array); //call the inOrderTraverse on the left side 
        array.push(tree.value); //push to the array the current tree value
        inOrderTraverse(tree.right, array); //call the inOrderTraverse on the right side
    }
    return array; //return the array
}