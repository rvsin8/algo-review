//Largest Range 
//Array

//my understanding


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