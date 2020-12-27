//Given an array of non-negative integers nums, you are initially positioned at the first index of the array.
//
//Each element in the array represents your maximum jump length at that position.
//
//Determine if you are able to reach the last index.
//
// 
//
//Example 1:
//
//Input: nums = [2,3,1,1,4]
//Output: true
//Explanation: Jump 1 step from index 0 to 1, then 3 steps to the last index.
//Example 2:
//
//Input: nums = [3,2,1,0,4]
//Output: false
//Explanation: You will always arrive at index 3 no matter what. Its maximum jump length is 0, which makes it impossible to reach the last index.
// 
//
//Constraints:
//
//1 <= nums.length <= 3 * 104
//0 <= nums[i] <= 105

//solve using it the greedy approach
//if we find an example with zero than we can't make the jump
//we need to make sure there are steps in that array that will get us to the last num in the array
//for a better time complexity we should start from the last index and arrive to the first
//see if any num on the left can get us to the last index
//what is the leftmost idx can get us to the end? keep iterating through this until we hit the first idx
//can idx 0 can us to the end idx

//[2,3,1,1,4]
//leftmost idx is 4
//in idx3 which is 1 can we get to 4, yes 3 + 1 >= 4
//in idx2 which is 1 can we get to 3, yes 2 + 1 >= 3
//in idx1 which is 3 can we get to 2, yes 1 + 3 >= 2
//in idx0 which is 2 can we get to 1, yes 0 + 2 >= 1
//we can get to the last index from the first one

var canJump = function(nums) {
    let lastValidIndex = nums.length - 1; //to get the last idx aka the leftmost valid idx

    for (let i = nums.length - 1; i >= 0; i--){
        if (i + nums[i] >= lastValidIndex){ //check to see if the idx we on is the leftmostvalid idx
           lastValidIndex = i; //then we need to update the last valid index to the index we on

        }
    }

    return lastValidIndex === 0;
};

