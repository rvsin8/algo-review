//Max Path Sum In Binary Tree
//Binary Tree

//my understandings 
//we get a bt and find the greatest sum you can get from a path
//a path is a collection of nodes in a bt that are connected, no single node can be connected to two other nodes
//max path sum is 18 via 7 + 3 + 1 + 2 + 5
//this will be a recursive function 
//we can try to find the mps of the left subtree and then right subtree and do some computations to get the max
//call the mps on a tree, so the left subtree = mps(l) and right subtree = mps(r)
//we shouldnt do LS + value + RS bc one of the left or right path sum can be negative 
//temporary variable = max(LS + V, V)
//temp2 var = max(temp + RS, temp) do we want to add the right paths sum ? maybe we will see
//we are always assuming our root node or current value will be in our sum but that assumption is wrong bc what if the root node o current value is negative 
//for every node we will compute the max path sum and we will also compute the max path sum as a root node and a running path root sum
//rewrite the algo 
//mps(T): LSB, LS = mps(L) triangle 
//RSB, RS = mps(R) triangle 
//MCSB = max(LSB, RSB) not triangle 
//MSB = max (MCSB + V, V) not triangle 

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