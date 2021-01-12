//Binary Search
//Searching

//my notes
//[0,1,21,33,45,45,61,71,72,73], 33
//in binary search the list and array need to be sorted
//if you have a sorted array in an interview then think about binary search if you can use it
//you going to want to find the middle num in the array first
//based on the middle you'll either look through the first half or the second half of the array
//you will have two pointer - left / right
//they'll be in two opposite spots
//to get the middle we will need the avg of the array --> M = (0 + 9) / 2 = 4.5 is not a valid index so we round it down to 4 
//we can put our middle pointer to 45 which is in idx 4
//once we get a middle num, we compare it to our target num and see where we move from there
//since our num is less than 45, we can erase the right side
//we can then change our middle pointer to the middle array that was not erased
//we will move the right pointer to the left of our middle value and then that will be our new array with a new middle being calculated
//[0,1,21,33]
//our new middle is --> M = 0 + 3 / 2 --> 1.5 --> 1
//our middle pointer now points at 1 at idx 1
//compare 1 to 33, 1 is less so we erase that left side and move our left pointer to the right of 1
//[22,33] is a new array, we recalc middle pointer --> M = 2 + 3 / 2 ==> 2.5 --> 2 WHICH IS 21
//21 to 33 is not it, so we erase 21 since its less, so now we move that left pointer to the right to our last one which is 33
//[33] once our left and right overlap that is our num and return 33 which was it
//we return idx 3
//if a num is not in the array and it cannot be found, once we do that we say we have never found the num

//time complexity
//O(log(N)) - we are eliminating half our input, every time we traverse

//space complexity
//if you implement it iteratively it will be O(1)space we are not using additional space as you should be
//recursively then you might have a complexity O(log(N))

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