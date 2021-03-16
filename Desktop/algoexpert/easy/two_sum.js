//Two Sum
//Arrays

//my understandings 
//gives an array of distinct integer values
//a separate integers value that gives you a target sum
//we need to see if there is a pair in the array that sums up to the target sum
//[3,5,-4,8,11,1,-1,6], 10 --> 11 - 1
//we can use two for loops but its not optimal for a time point of view
//a better way may be a hash table, may cost extra space but will make our time complexity better 
//we can create a hash table and traverse our array and at each number we stop at see if it equals our target num
//we can have targetSum = 10, and have currentNum = x and find y, where x + y = 10 or y = 10 - x
//if y is in our hash table, we return x and y.
//we start at 3, y = 10 - 3 --> 7
//then 5, 10 - 5 --> y = 5
//next is 10 - (-4) = 14
//hash table right now --> {3 = true, 5 = true, 4 = true}
//10 - 8 = 2
//10 - 11 = -1 
//10 - 1 = 9
//10 - (-1) = 11 it is in our hash table so return [11, -1]
//hashtable = {3 = true, 5 = true, -4 = true, 8 = true, 11 = true, 1 = true}
//O(n) time bc we traverse our array once and calculate for y
//O(n) space bc we are adding values to our hash table 

//optimal solution 
//

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