//Find Three Largest Numbers
//Searching 

//my notes
//you are given an array of integers, may not be sorted, and our task is the three largest integers
//[141,1,17,-7,-17,-27,18,541,8,7,7] --> [18, 141, 541]
//we want to keep track and store the 3 largest num and keep traversing 
//[-,-,141]
//[-,1,141]
//[1,17,142] we shift 1 to the first place adn put 17 in idx 2 bc its the second largest num
//for the next 3 nums they are all negative numbers -7, -17, -27
//for 18 we get [17,18,141]
//for 541 we get [18,141,541]
//the rest are smaller than these 3 nums and that is our final array

//time complexity
//O(n) where n is the length of our input array, we have to traverse the entire array that why it is O(n)

//space complexity
//O(1) space bc we are not using any additional memory

function findThreeLargestNumbers(array) {
    const threeLargest = [null, null, null]; //array of length three and we can initialize with none or null values
    for (const num of array) { //traverse the array, for eveyr num we will call a helper method
        updateLargest(threeLargest, num); //pass in num and three largest
    }
    return threeLargest; //return final array
}

function updateLargest(threeLargest, num) { //take in 3 largest num and present num
    if (threeLargest[2] === null || num > threeLargest[2]) { //if 3 largest in idx in none or the num is greater than threelargest at 2 ..
        shiftAndUpdate(threeLargest, num, 2); //we want to update our num at idx 2 via helper method that will shift the num and update
    } else if (threeLargest[1] === null || num > threeLargest[1]) { //compare to the second largest number
        shiftAndUpdate(threeLargest, num, 1); //if its greater then update via helper
    } else if (threeLargest[0] === null || num > threeLargest[0]) { //or the smallest num in that array, if its larger than that we ...
        shiftAndUpdate(threeLargest, num, 0); //update via helper method
    }
}

function shiftAndUpdate(array, num, idx) { //we need our array, the num we want to update, an idx which is the last idx of the array of 3 nums that we want to shift / update
    for (let i = 0; i <= idx; i++) { //traverse
        if (i === idx) {
            array[i] = num;
        } else {
            array[i] = array[i + 1];
        }
    }
}