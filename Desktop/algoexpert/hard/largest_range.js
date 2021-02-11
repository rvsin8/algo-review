//Largest Range 
//Array

//my understanding
//[1,11,3,0,15,5,2,4,10,7,12,6]
//you are given an array of int and want to find the largest range of numbers in this array
//range is a set of numbers that come one after another
//largest range is [0,7]
//obvious way to solve this is by sorting but there is a more optimal solution

//more optimal solution
//without sorting it we need to find a way to access each integer very fast
//it may useful to have a hash-table which we will do where we store all the numbers and we can access this in constant time
//we can start at 1 and see what numbers are less than or greater than 1
//1 so what comes before it ? 0, what comes before 0 ? -1 but we do not have that so the range starts at 0
//what comes after 1 ? 2,3,4,5,6,7 so that is where our range ends at 7



//time complexity
//O(N)

//space complexity
//O(N)

function largestRange(array) {
    let bestRange = [];
    let longestLength = 0;
    const nums = {};
    for (const num of array) {
        nums[num] = true;
    }
    for (const num of array) {
        if (!nums[num]) continue;
        nums[num] = falsel
        let currentLength = 1;
        let left = num - 1;
        let right = num + 1;
        while (left in nums) {
            nums[left] = false;
            currentLength++;
            left--;
        }
        while (right in nums) {
            nums[right] = false;
            currentLength++;
            right++;
        }
        if (currentLength > longestLength) {
            longestLength = currentLength;
            bestRange = [left + 1, right - 1];
        }
    }
    return bestRange;
}