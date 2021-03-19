//Sorted Squared Array
//Arrays

//my understandings 
//takes as input of integers in increasing order and give you an output of an array of integers squared in increasing order
//[1,2,3,5,6,8,9] --> [1,4,9,25,36,64,81]
//if an array had both negative and positive integers we cannot just traverse and add bc it would not be in order
//[-3,-1,2,5,10] --> [9,1,4,25,100] the array is NOT sorted
//

//time complexity 
//O(nlogn)

//space complexity 
//O(n)

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