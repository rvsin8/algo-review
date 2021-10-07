function binarySearch(array, target){
    return binarySearchHelper(array, target, 0, array.length - 1); //take in the left pointer at 0 and right pointer to the final idx of the array
} 

function binarySearchHelper(array, target, left, right){ //we need to take in a left or right pointer along with the target and the array
    while (left <= right){ //is the left greater than the right, this is our base case, if it is greater then we are done bc they overlapped the two pointers
        const middle = Math.floor((left + right) / 2); //we calc the middle pointer and this is the formula to use
        const potentialMatch = array[middle]; //the idx of the middle pointer

        if (target === potentialMatch){ //compare target to the potential match and if they are the same
            return middle; 
        } else if (target < potentialMatch) { //if the target is less than the potential match 
            right = middle - 1; //we want to pass the right pointer to the left of the middle just update it
        } else {
            left = middle + 1; //we want to pass the left pointer to the right of the middle just update it
        }
    }
    return -1; //if none are found we return -1
}
// Do not edit the line below.
exports.binarySearch = binarySearch;