//Max Path Sum In Binary Tree
//Binary Tree

//my understandings 
//we get a bt and find the greatest sum you can get from a path
//a path is a collection of nodes in a bt that are connected, no single node can be connected to two other nodes
//max path sum is 18 via 7 + 3 + 1 + 2 + 5
//this will be a recursive function 


//time complexity 
//O(n)

//space complexity 
//O(log(n))

function maxPathSum(tree) {
    const [_, maxSum] = findMaxSum(tree);
    return maxSum;
}

function findMaxSum(tree) {
    if (tree === null) return [0, -Infinity];

    const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left);
    const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);
    const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);

    const {value} = tree;
    const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
    const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
    const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);

    return [maxSumAsBranch, maxPathSum];

}