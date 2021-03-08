//Index Equals Value
//Searching 

//my understanding 
//an array where we have int in increasing order and no repeats all are distinct
//take this array as an input 
//when the idx is = to the value at that value
//[-5,-3,0,3,4,5,9] --> 3=3
//if we cannot find an idx value that corresponds to the value at that given idx we return -1
//brute force would be simply traverse left to right and see if an index = array[index] and if so then return that index
//that time complexity would be o(n) but it can be done better

//my solution 
//binary search bc we have a sorted array and we are searching
//it is faster than searching element bu element 
//we will check the middle and cut half of a search space each time
//we dont have a search value
//when we check the middle value we will check its idx
//[-2,0,2,3,6,8,10] the middle value is 3 and we possibly found our answer but we need to check cause there can be multiple indices to their array
//to the left of 3 it can only be equal to less than 3
//we would check out the left side of our array bc the left side is where things come first
//we do another bs and we find that 2 is at idx2
//we know the previous value is not equal to its idx so we know the answer is 2
//how do we know what side to check when we come to a num that is not equal to its idx
//if the value is > than the idx then we want to search the left side bc the values have to keep increases by 1 or more while the idx can only increase by 1 so we erase the right side
//if the middle is > than its idx then we know all the values to the right will probably be bigger than their idx bc all the values must keep increasing
//now we are at idx1 where the value is 0 and 0 < -1 so we erase the left bc we know the value will be less than the idx for all value to the right so we erase the left side
//now we are at idx2 and the value is 2 ! our answer.

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
