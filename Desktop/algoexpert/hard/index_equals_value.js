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
    }
}
