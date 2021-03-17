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
//when they overlap we are done with this round of iteration
//so on

//time complexity 
//O(n^2) where n is the length of our input array, we iterate through and we do things with each num whether its adding or comparing

//space complexity 
//O(n) we store the triplets 

function threeNumberSum(array, targetSum) {
    array.sort((a,b) => a - b); //we want to sort the array in ascending order
    const triplets = []; //where we store our triplets 
    for (let i = 0; i < array.length - 2; i++) { //iterate //-2 bc we are looking for triplets and our last current number aka first num has to be third last since we have two others
        let left = i + 1; //the idx to the rigth of i
        let right = array.length - 1; //final idx of the array 
        while (left < right) { //while they do not overlap 
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