//Search For Range
//Searching

//my understanding 

//time complexity 
//O(long(n))

//space complexity 
//O(1)

function searchForRange(array, target) {
    const finalRange = [-1, -1];
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);

}
