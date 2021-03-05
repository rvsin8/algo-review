//Search For Range
//Searching

//my understanding 
//you get a sorted array of integers as well as a target number
//it wants you to find the longest range in indices in the input array, where you can find the target num
//[0,1,21,33,45,45,45,45,45,45,61,71,73], 45 --> [4,9]


//time complexity 
//O(long(n))

//space complexity 
//O(1)

function searchForRange(array, target) {
    const finalRange = [-1, -1];
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
    return finalRange;

}

function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] < target) {
            left = mid + 1;
        } else if (array[mid] > target) {
            right = mid - 1;
        } else {
            if (goLeft) {
                if (mid === 0 || array[mid - 1] !== target) {
                    finalRange[0] = mid;
                    return;
                } else {
                    right = mid - 1;
                }
            } else {
                if (mid === array.length - 1 || array[mid + 1] !== target) {
                    finalRange[1] = mid;
                    return;
                } else {
                    left = mid + 1;
                }
            }
        }
    }
}
