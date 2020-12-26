//Implement next permutation, which rearranges numbers into the lexicographically next greater permutation of numbers.
//
//If such an arrangement is not possible, it must rearrange it as the lowest possible order (i.e., sorted in ascending order).
//
//The replacement must be in place and use only constant extra memory.
//
// 
//
//Example 1:
//
//Input: nums = [1,2,3]
//Output: [1,3,2]
//Example 2:
//
//Input: nums = [3,2,1]
//Output: [1,2,3]
//Example 3:
//
//Input: nums = [1,1,5]
//Output: [1,5,1]
//Example 4:
//
//Input: nums = [1]
//Output: [1]
// 
//
//Constraints:
//
//1 <= nums.length <= 100
//0 <= nums[i] <= 100


//my understanding
//we are going to have an array and we are going to have numbers in that array and if we were to read that array like its a number, whe want to return the next number, what would be the next highest number?
//sort it in ascending order
//we can't use any ds that can rearrange our set
//we want to do this is in n time, we want to do this in place
//2n time complexity, passes 2 times


const swap = (arr, i, j) => {

};

const reverse = (arr, start, num) => { //

};

const nextPermutation = function(nums) => {
    let i = nums.length-1; //we want the pointer to begin from the end

    while (nums[i-1] > nums[i]) { //while the num in-front of me is greater than the num behind me, we want to keep looking
        i--; //keep looking
    }

    const swapIndex = reverse(nums, i, nums[i-1]); //we pass in nums, starting index i, and the num we want to compare with which is nums[i-1], it reverses all the num to the right, the num we found and swapping those indices 
    if (swapIndex !== null) swap(nums, i - 1, swapIndex); //we want to swap when the swapIndex = null, if we hit null we never came across a value that was greater the num we wanted to swap with

    return nums;
};

