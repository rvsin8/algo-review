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
    return treeInfo.isBalanced; //solution
}

function getTreeInfo(node) { //helper method - we want know if the height is balanced and its height
    if (node === null) return new TreeInfo(true, -1); //if the node is none, we return true and -1 we have hit a base case, the node is balanced but the height is -1 (not important)

    const leftSubTreeInfo = getTreeInfo(node.left); //check the left subtree
    const rightSubtreeInfo = getTreeInfo(node.right); //check the right subtree

    const isBalanced = 
        leftSubtreeInfo.isBalanced && //is the left balanced
        rightSubtreeInfo.isBalanced && //is the right balanced 
        Math.abs(leftSubTreeInfo.height - rightSubtreeInfo.height) <= 1; //if we subtract the two subtrees they must be less than or equal to 1 for it to be balanced
    const height = Math.max(leftSubTreeInfo.height, rightSubtreeInfo.height) + 1; //max height of the left and right subtree
    return new TreeInfo(isBalanced, height); //return the height and boolean

}