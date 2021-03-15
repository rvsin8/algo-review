//Two Sum
//Arrays

//my understandings 
//gives an array of distinct integer values
//a separate integers value that gives you a target sum
//we need to see if there is a pair in the array that sums up to the target sum
//[3,5,-4,8,11,1,-1,6], 10 --> 11 - 1


//time complexity 
//O(nlog(n))

//space complexity 
//O(1)

function twoNumberSum(array, targetSum) {
    array.sort((a,b) => a - b);
    let left = 0;
    let right = array.length - 1;
    while (left < right) {
        const currentSum = array[left] + array[right];
        if (currentSum === targetSum) {
            return [array[left], array[right]];
    } else if (currentSum < targetSum) {
        left++;
    } else if (currentSum > targetSum) {
        right--;
    } }
}

//time O(n)
//space O(n)

function twoNumberSum(array, targetSum) {
    const nums = {};
    for (const num of array) {
        const potentialMatch = targetSum - num;
        if (potentialMatch in nums) {
            return [potentialMatch, num];
        } else {
            nums[num] = true;
        }
    }
    return [];
}