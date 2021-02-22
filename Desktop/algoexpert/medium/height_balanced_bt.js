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

function getTreeInfo(node) {
    if (node === null) return new TreeInfo(true, -1);

    const leftSubTreeInfo = getTreeInfo(node.left);
    const rightSubtree = getTreeInfo(node.right);

    
}