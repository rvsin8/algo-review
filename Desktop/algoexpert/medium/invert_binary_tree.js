//Invert Binary Tree
//Binary Tree

//my understanding
//solution are elegant but stump a lot of people
//gives us a binary tree, every node has a value integer value and every node has 0 1 or 2 children nodes
//invert this tree
//swap the left and right nodes


//time complexity
//O(n)

//space complexity 
//O(d)

function invertBinaryTree(tree) {
    if (tree === null) return;
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}

function swapLeftAndRight(tree) {
    const left = tree.left;
    tree.left = tree.right;
    tree.right = left;
}

