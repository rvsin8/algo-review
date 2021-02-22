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

    const isBalanced = 
        leftSubtreeInfo.isBalanced &&
        rightSubtreeInfo.isBalanced &&
        Math.abs(leftSubTreeInfo.height - rightSubtreeInfo.height) <= 1;
    const height = Math.max(leftSubTreeInfo.height, rightSubtreeInfo.height) + 1;
    return new TreeInfo(isBalanced, height);

}