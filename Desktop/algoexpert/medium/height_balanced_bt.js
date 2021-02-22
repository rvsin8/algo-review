//Height Balanced Binary Tree
//Binary Trees

//my understanding 

//time complexity
//O(n)

//space complexity
//O(h)

function heightBalancedBinaryTree(tree) {
    const treeInfo = getTreeInfo(tree);
    return treeInfo.isBalanced;
}

