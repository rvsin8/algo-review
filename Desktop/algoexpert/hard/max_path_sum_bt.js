//Max Path Sum In Binary Tree
//Binary Tree

//my understandings 

//time complexity 
//O(n)

//space complexity 
//O(log(n))

function maxPathSum(tree) {
    const [_, maxSum] = findMaxSum(tree);
    return maxSum;
}

function findMaxSum(tree) {
    
}