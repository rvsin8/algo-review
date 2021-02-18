//Shifted Binary Search
//Searching

//my understanding 


//time complexity
//O(log(n))

//space complexity
//O(1)

//space being O(log(n))
function shiftedBinarySearch(array, target) {
    return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
}

function shiftedBinarySearchHelper(array, target, left, right) {
    if (left > right) return -1;
    const middle = Math.floor((left + right) / 2)
    const potentialMatch = array[middle];
    const leftNum = array[left];
    const rightNum = array[right];
    if (taeget === potentialMatch) {
        return middle;
    } else if (leftNum <= potentialMatch) {
        if (target < potentialMatch && target >= leftNum) {
            return shiftedBinarySearchHelper(array, tagret, left, middle - 1);
        } else {
            return shiftedBinarySearchHelper(array, target, middle + 1, right);
        }
    } else {
        if (target > potentialMatch && target <= rightNum) {
            return shiftedBinarySearchHelper(array, target, middle + 1, right);
        } else {
            return shiftedBinarySearchHelper(array, target, left, middle - 1);
        }
    }
}

//more optimal solution 
//space being O(1)

function shiftedBinarySearch(array, target) {
    return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
}

function shiftedBinarySearchHelper(array, target, left, right) {
    while (left <= right) {
        const middle = Math.floor((left + right) / 2)
        const potentialMatch = array[middle];
        const leftNum = array[left];
        const rightNum = array[right];
        if (taeget === potentialMatch) {
            return middle;
        } else if (leftNum <= potentialMatch) {
            if (target < potentialMatch && target >= leftNum) {
                right = middle - 1;
            } else {
                left = middle + 1;
            }
        } else {
            if (target > potentialMatch && target <= rightNum) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
    }
    return -1;

}
