//Shifted Binary Search
//Searching

//my understanding 
//[45,61,71,72,73,0,1,21,33,45] 33 --> 8
//this may not always work, the array needs to have distinct numbers
//use the bs algorithm 
//you are given a sorted array of numbers that are shifted 45 - 73 and then 0 - 45
//find out if the target num is in the array and return the target idx in the array
//left pointer at 45 idx 0
//right pointer at 45 idx 9
//middle pointer = (0 + 9) / 2 = 4.5 and round it down to idx 4 which is 73
//usually in bs we compared our middle num 73 to 33, and since 73 is >, we erase the right side but we cannot do that here
//we can look at the leftmost pointer at 45 and realize it is > than 33
//if the left pointer is < or = our middle pointer then we want to check
//if our target number is < the middle number AND target num is >= the left num, then we explore the left side

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
