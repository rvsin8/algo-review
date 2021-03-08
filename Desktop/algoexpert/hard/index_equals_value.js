//Index Equals Value
//Searching 

//my understanding 

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
