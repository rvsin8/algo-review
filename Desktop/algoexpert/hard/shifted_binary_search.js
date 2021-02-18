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
//if its the opposite then we search the right side
//if the left num is > than the middle we know the left side is not sorted
//so 33 is < 73 and < 45 so we eliminate the left side and recalc the middle --> 5 + 9 = 14 / 2 = 7 so 21
//33 is > 21, so we eliminate the left 0 - 21 and we now arrive at our left pointer being at 33 and right at 45
//recalc middle pointer --> 8 +9 = 17 / 2 --> 8 aka 33


//time complexity
//O(log(n)) where n is the entire length of our array, so we get rid of half our array every iteration

//space complexity
//O(1) iterative method

//space being O(log(n)) recursively 
function shiftedBinarySearch(array, target) {
    return shiftedBinarySearchHelper(array, target, 0, array.length - 1); //takes in array, target, left and right value idx 0 and last idx
}

function shiftedBinarySearchHelper(array, target, left, right) { //helper method that will keep track of the left and right
    if (left > right) return -1; //base case, if the left exceeds the right pointer return -1 meaning we have not found the target 
    const middle = Math.floor((left + right) / 2); //declare middle pointer 
    const potentialMatch = array[middle]; //number of the middle idx
    const leftNum = array[left]; //left num 
    const rightNum = array[right]; //right num
    if (taeget === potentialMatch) { //if target is equal to the middle value
        return middle; //return middle
    } else if (leftNum <= potentialMatch) { //if the left num smaller than or equal to the potenital match that means the left side of array is sorted and if the target is >= left num that means the target has to be in the left side
        if (target < potentialMatch && target >= leftNum) { //if the tagret is < potential match if the target is >= left num that means the target has to be in the left side
            return shiftedBinarySearchHelper(array, tagret, left, middle - 1); //explore left half
        } else {
            return shiftedBinarySearchHelper(array, target, middle + 1, right); //explore right half
        }
    } else { //seachc the right half
        if (target > potentialMatch && target <= rightNum) { //opposite as above, if the target is greater than the potential match and smaller than or equal too the right num
            return shiftedBinarySearchHelper(array, target, middle + 1, right); //explore right half
        } else {
            return shiftedBinarySearchHelper(array, target, left, middle - 1); //explore left path if those conditions are not met
        }
    }
}

//more optimal solution 
//space being O(1)

function shiftedBinarySearch(array, target) {
    return shiftedBinarySearchHelper(array, target, 0, array.length - 1);
}

function shiftedBinarySearchHelper(array, target, left, right) {
    while (left <= right) { //while the left is smaller or equal than the right pointer
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

//recheck this and resubmit this
//recheck this and resubmit

