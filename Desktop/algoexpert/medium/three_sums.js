//Three Sums
//Arrays

//my understandings 

//time complexity 
//O(n^2)

//space complexity 
//O(n)

function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a - b);
    const triplets = [];
    for (let i = 0; i < array.length - 2; i++) {
        let left = i + 1;
        let right = array.length - 1;
    }

}