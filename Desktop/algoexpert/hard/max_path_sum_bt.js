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
//MST = max (MSB, LSB + V + RSB)
//we need the running max path sum as well RMPS = max(LS, RS, MST)
//return a list of two values (MSB, RMPS)

//time complexity 
//O(n) where n is the total number of nodes in a tree, so we traverse every node aka n nodes 

//space complexity 
//O(log(n)) where n is th total number of nodes bc we are dealing with a binary tree, when we call the recursive call aka log of n calls assuming we have a primarily balanced bt

function maxPathSum(tree) {
    const [_, maxSum] = findMaxSum(tree); //recognize the recursive msp 
    return maxSum;
}

function findMaxSum(tree) { //helper method
    if (tree === null) return [0, -Infinity]; //handle the base case, when our tree is none then return an object with two values

    const [leftMaxSumAsBranch, leftMaxPathSum] = findMaxSum(tree.left); //the left max sum and left max path sum will be one recursive call on the left
    const [rightMaxSumAsBranch, rightMaxPathSum] = findMaxSum(tree.right);//the right max sum and right max path sum will be one recursive call on the right
    const maxChildSumAsBranch = Math.max(leftMaxSumAsBranch, rightMaxSumAsBranch);//the value we use to compute the maximum sum branch of our current tree or triangle, we need it as a branch

    const {value} = tree;
    const maxSumAsBranch = Math.max(maxChildSumAsBranch + value, value);
    const maxSumAsRootNode = Math.max(leftMaxSumAsBranch + value + rightMaxSumAsBranch, maxSumAsBranch);
    const maxPathSum = Math.max(leftMaxPathSum, rightMaxPathSum, maxSumAsRootNode);

    return [maxSumAsBranch, maxPathSum];

}