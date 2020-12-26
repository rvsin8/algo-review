//Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? Find all unique triplets in the array which gives the sum of zero.
//
//Notice that the solution set must not contain duplicate triplets.
//
// 
//
//Example 1:
//
//Input: nums = [-1,0,1,2,-1,-4]
//Output: [[-1,-1,2],[-1,0,1]]
//Example 2:
//
//Input: nums = []
//Output: []
//Example 3:
//
//Input: nums = [0]
//Output: []
 
//Hint 1 
//So, we essentially need to find three numbers x, y, and z such that they add up to the given value. If we fix one of the numbers say x, we are left with the two-sum problem at hand!
//
//Hint 2
//For the two-sum problem, if we fix one of the numbers, say
//x
//
//, we have to scan the entire array to find the next number
//y
//
//which is
//value - x
//
//where value is the input parameter. Can we change our array somehow so that this search becomes faster?
//
//
//Hint 3
//The second train of thought for two-sum is, without changing the array, can we use additional space somehow? Like maybe a hash map to speed up the search?


function threeSum(nums) {
    let result = [];
    let curResult = [];;
    
    let left = 0;
    let right = nums.length - 1;
    
    // sorting least to greatest
    nums.sort((a, b) => a - b); 
    
    for (let i = 0; i < nums.length; i++) {
        if(i > 0 && nums[i] === nums[i - 1]) continue;
        
        left = i + 1;
        right = nums.length - 1;
        let sum = 0;
        
        while (left < right) {
            sum = nums[i] + nums[left] + nums[right];
            if (sum === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left++;
                right--;
                
                while(left < right && nums[left] === nums[left - 1]) left++;
                while(left < right && nums[right] === nums[right + 1]) right++;
            } else if (sum > 0) {
                right--;
            } else {
                left++;
            }
        }
    }
    return result;
}