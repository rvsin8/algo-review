//Invert Binary Tree
//Binary Tree

//my understanding

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

