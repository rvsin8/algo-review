//Invert Binary Tree
//Binary Tree

//my understanding

//time complexity

//space complexity 

function invertBinaryTree(tree) {
    if (tree === null) return;
    swapLeftAndRight(tree);
    invertBinaryTree(tree.left);
    invertBinaryTree(tree.right);
}
