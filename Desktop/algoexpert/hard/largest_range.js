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
//next move to the next num which is 11
//to the left of 11 is 10 and we have it, do we have 9 ? no so we start at 10
//to the right we have 12 and yes we have it, 13 ? no so the next range is [10,11,12]
//next is 3 and with this we would get the same exact range we would get in our range for 1 so that is not optimal 
//with a hash table we can have every number in the hash table to a boolean which will tell us if its correct or true that we can explore this number
//we start with assigning all our numbers in the hash table to true and whenever we explore a number and find it in the hash table we change it value from true to false
//15 is the only one that is not false and we go through it and change it to false which has the range of [15]
//finally we are left with out final range [0,7]

//time complexity
//O(N) we iterate through each number in a hashtable 

//space complexity
//O(N) we store each integer in a has table

function largestRange(array) {
    let bestRange = []; //this array will hold the two number, first and last num of the range
    let longestLength = 0; //hold the longest length of the range, will let us know if it needs to be updated
    const nums = {}; //hashtable for all our numbers
    for (const num of array) { //we go through our array
        nums[num] = true; //set every num in our hash table to true 
    }
    for (const num of array) { //for num in our array
        if (!nums[num]) continue; //if the value in our hash table is false, we continue and skip that number
        nums[num] = false; //otherwise we set it to false
        let currentLength = 1; //we set the current length to 1, we are expanding the length 
        let left = num - 1; //left side expansions 
        let right = num + 1; //right side expansions
        while (left in nums) { //while left num is in our input array
            nums[left] = false; //we set that integer to be false
            currentLength++; //we increment our total length 
            left--; //and continue going left by decrementing 
        }
        while (right in nums) { //while right is in the hash table
            nums[right] = false; //we set that table to false
            currentLength++; //we increase the total length
            right++;//we go further right and increment 
        }
        if (currentLength > longestLength) { //once the new range's length surpasses the longest known range length we have stored
            longestLength = currentLength; //we update it to the new longest length
            bestRange = [left + 1, right - 1]; //we do this +1 and -1 --> the leftmost num that wasnt 1 //relook at this a little confusing
        }
    }
    return bestRange;
}