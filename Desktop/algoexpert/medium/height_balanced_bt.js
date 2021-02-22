//Height Balanced Binary Tree
//Binary Trees

//my understanding 
//given the root node and we are suppose to analyze the tree and return true or false if the tree is balanced or not
//a bts is considered to be height balanced if for every single node in the tree the difference of the height of that node's left subtree is equal to 1 and not greater

//my solution
//we can't make assumptions solely based off of root nodes
//we want to go level by level and check each node's subtree by looking to the left and right
//determine the height of the left subtree and right subtree
//we use recursion 
//when we check each subtree we return to the parent node and depending on how many traversals were done we know the height
//we take the max height from each node and add 1 to is whenever we are making our way up

//time complexity
//O(n) we need to look through all the nodes in our binary tree

//space complexity
//O(h) for height bc the height will determine how many recursive call we need to keep track of in our stack

function heightBalancedBinaryTree(tree) {
    const treeInfo = getTreeInfo(tree);
    return treeInfo.isBalanced;
}

function getTreeInfo(node) {
    if (node === null) return new TreeInfo(true, -1);

    const leftSubTreeInfo = getTreeInfo(node.left);
    const rightSubtreeInfo = getTreeInfo(node.right);

    const isBalanced = 
        leftSubtreeInfo.isBalanced &&
        rightSubtreeInfo.isBalanced &&
        Math.abs(leftSubTreeInfo.height - rightSubtreeInfo.height) <= 1;
    const height = Math.max(leftSubTreeInfo.height, rightSubtreeInfo.height) + 1;
    return new TreeInfo(isBalanced, height);

}