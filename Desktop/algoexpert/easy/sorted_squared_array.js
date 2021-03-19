//Sorted Squared Array
//Arrays

//my understandings 
//takes as input of integers in increasing order and give you an output of an array of integers squared in increasing order
//[1,2,3,5,6,8,9] --> [1,4,9,25,36,64,81]
//if an array had both negative and positive integers we cannot just traverse and add bc it would not be in order
//[-3,-1,2,5,10] --> [9,1,4,25,100] the array is NOT sorted
//the brute force approach we can use is to traverse and compute the values and then sort it and this will always work


//optimal solution
//no sorting algorithm
//we know the numbers closest to 0 will be the smallest values and those furthest away will be larger values
//so our largest number can either be our smallest value or our largest for example --> -3,-2,-1,0,1,2,3
//create a new array and initialize it to the same length of our original array and fill it up with 0
//we can set pointers to the smallest and largest value 
//we can take abs value of the smallest and the largest array and compare
//abs(-9) = 81, abs(12) = 144, 12 > -9 -->[0,0,0,0,0,144]
//we use these pointers to compare our smallest and largest values
//abs(-9) > abs(4) --> [0,0,0,0,81,144]
//so on until we get our sorted array


//time complexity 
//O(nlogn) bc our sorting //n is the num of ele in the input array

//space complexity 
//O(n) and bc we have a separate array

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);

    for (let idx = 0; idx < array.length; idx++) {
        const value = array[idx];
        sortedSquares[idx] = value * value;
    }

    sortedSquares.sort((a,b) => a - b);
    return sortedSquares;
}

// O(n) time 
// O(n) space 

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);
    let smallerValueIdx = 0;
    let largerValueIdx = array.length - 1;

    for (let idx = array.length - 1; idx >= 0; idx--) {
        const smallerValue = array[smallerValueIdx];
        const largerValue = array[largerValueIdx];

        if (Math.abs(smallerValue) > Math.abs(largerValue)) {
            sortedSquares[idx] = smallerValue + smallerValue;
            smallerValueIdx++;
        } else {
            sortedSquares[idx] = largerValue * largerValue;
            largerValueIdx--;
        }
    }
    return sortedSquares;
}