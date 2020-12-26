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
    const temp = arr[i]; //store one of the var in a var temp, use to swap
    arr[i] = arr[j]; //swap
    arr[j] = temp; //swap

};

const reverse = (arr, start, num) => { //
    let end = arr.length - 1; //end pointer
    let i = start; //start pointer
    let swapIndex = null; //we want to keep track of this

    let swapValue = Infinity; //we want swap value to infinity bc we want any num greater than the num we passing in

    while (start <= end) { //we want to keep search until start is less than or equal to
        if (i < end) swap(arr, i, end); //if i is less than end we want to swap

        if (arr[end] > num && arr[end] <= swapValue) { //the end has to be greater than num and less than or equal too swapVal
            swapValue = arr[end];
            swapIndex = end;
        }
        end--;
        i++;
    }
    return swapIndex;
};

const nextPermutation = function(nums) {
    let i = nums.length-1; //we want the pointer to begin from the end

    while (nums[i-1] >= nums[i]) { //while the num in-front of me is greater than the num behind me, we want to keep looking
        i--; //keep looking
    }

    const swapIndex = reverse(nums, i, nums[i-1]); //we pass in nums, starting index i, and the num we want to compare with which is nums[i-1], it reverses all the num to the right, the num we found and swapping those indices 
    if (swapIndex !== null) swap(nums, i - 1, swapIndex); //we want to swap when the swapIndex = null, if we hit null we never came across a value that was greater the num we wanted to swap with

    return nums;
};

//faster solution on leetcode
// objective: find next (larger) permutation. If not
    // avilable, sort ascending
// method: Iterate from before-last right to left and see if you find curr < next.
    // Once you do, find next larger than 'curr', and swap 'curr' with it
    // Reverse all els to right of 'curr' to make next larger perm
// complexity: 
    // time: O(N), space: O(1)
    // N => nums.length
var nextPermutation = function(nums) {
    if (nums.length <= 1) return nums;
    
    // all els after 'a' are in descending order
    let a = nums.length - 2;
    while (nums[a] >= nums[a + 1] && a > 0) a--;
    
    // find nums[a]'s next larger element 
        // (from right to left since all els to right of 'a' are descending)
    let b = nums.length - 1;
    while (nums[a] >= nums[b] && b > a) b--;
    
    
    if (a === 0 && b === 0) { // no arrangement possible
        // sort ascending
        reverse(nums, a, nums.length - 1);
    } else {
        swap(nums, a, b);
        // sort ascending after 'a' to make 'nums' next larger perm
        reverse(nums, a + 1, nums.length - 1);
    }
    
    return nums;
};

var reverse = function(arr, start, end) {
    while (start < end) {
        swap(arr, start, end);
        start++;
        end--;
    }
};


var swap = function(arr, idx1, idx2) {
    let temp = arr[idx1];
    arr[idx1] = arr[idx2];
    arr[idx2] = temp;
};