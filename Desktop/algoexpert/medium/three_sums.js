//Three Sums
//Arrays

//my understandings 
//find all the possible triplets that sum up to the target sum
//[12,3,1,2,-6,5,-8,6], 0 --> [[-8,2,6], [-8,3,5], [-6,1,5]]
//we can do this by sorting this in ascending order and using two pointers - left / right
//[-8,-6,1,2,3,5,6,12], 0
//iterate through the array once 
//we start with -8
//have a left pointer one ele ahead of -8 at -6
//have a right pointer at the end of the array at 12
//currentSum = currentNum + leftNum + rightNum
//CS = CN + L + R
//CS = -8 + -6 + 12 = -2 nope, since it less than our target num 0 so if we move our left pointer by 1 we are guaranteed to have a bigger sum
//CS = -8 + 1 + 12 = 5 nope, since it is greater than our target num we need to move our right pointer to the left by 1
//CS = -8 + 1 + 6 = -1 nope, we move our left pointer to the right 
//CS = -8 + 2 + 6 = 0 yes !

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
        while (left < right) {
            const currentSum = array[i] + array[left] + array[right];
            if (currentSum === targetSum) {
                triplets.push([array[i], array[left], array[right]]);
                left++;
                right--;
            } else if (currentSum < targetSum) {
                left++;
            } else if (currentSum > targetSum) {
                right--;
            }
        }
    }
    return triplets;

}