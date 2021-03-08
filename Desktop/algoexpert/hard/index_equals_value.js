//Index Equals Value
//Searching 

//my understanding 
//an array where we have int in increasing order and no repeats all are distinct
//take this array as an input 
//when the idx is = to the value at that value
//[-5,-3,0,3,4,5,9] --> 3=3
//if we cannot find an idx value that corresponds to the value at that given idx we return -1
//

//time complexity 
//O(log(n))

//space complexity 
//O(1)

function indexEqualsValue(array) {
    let leftIndex = 0;
    let rightIndex = array.length - 1;

    while (leftIndex <= rightIndex) {
        const middleIndex = leftIndex + Math.floor((rightIndex - leftIndex) / 2);
        const middleValue = array[middleIndex];

        if (middleValue < middleIndex) {
            leftIndex = middleIndex + 1;
        } else if (middleValue === middleIndex && middleIndex === 0) {
            return middleIndex;
        } else if (middleValue === middleIndex && array[middleIndex - 1] < middleIndex - 1 ) {
            return middleIndex;
        } else {
            rightIndex = middleIndex - 1;
        }
    } 
    return -1;
}
