//Max Subset Sum No Adjacent
//Dynamic Programming

//my info
//we will get an array of only positive integers and we want to find the greatest sum we can add up without two numbers being adjacent to each other
//[7,10,12,7,9,14] --> 7 + 12 + 14 = 3
//we will have a new array where we will add up the nums that are not next to each other for the greatest adjacent sum
 

//algorithm 
//at idx 0, 7 is the greatest sum we can generate at idx 0 --> [7]
//at idx 1, we can't use 10 since its next to 7 --> [7,10]
//at idx 2, we can add the 12 to 7 and get 19 and store it in our array --> [7,10,19]
//at idx 3, we cannot get a higher integer than 19 so we leave it as --> [7,10,19,19]
//at idx 4, we can add 9 to 7 and 12 --> 28 and get [7,10,19,19,28]
//at idx 5, we can add 14 to 12 and 7 and get 33 --> [7,10,19,19,28,33] with 33 is the max subset sum with no adjacent value

//maxSums = the array we are building
//array = our input array
//maxSums[i] = will be the maximum value at { 1) maxSums[i-1] or 2) maxSums[i-2] + array[i] } //this will be our two base cases
//maxSums[2] = max(maxSums[1], maxSums[0] + array[2]) --> max(10, 19) so we store the 19 via this formula since its greater than 10

//time complexity 
//O(n) time, where n is the length of our array and we have to visit every ele once

//space complexity
//O(n) space, bc we are building a new array
//we can do better bc only need only 2 stored values as in our formula via var first i-1 and var sec i-2
//current = max(first, second + array[i])
//after each iteration we will update our two values first --> current, second --> first this makes it O(1)

function maxSubsetSumNoAdjacent(array) {
    if (!array.length) return 0; //edge case 1 --> if length is null then 0
    if (array.length === 1) return array[0]; //if array length is 1 then return the num at idx 0
    let second = array[0]; //declare second variable will represent max sum of i - 2 --> array[2]
    let first = Math.max(array[0], array[1]); //i-1 --> initialize to the max val of 0 and 1
    for (let i = 2; i < array.length; i++){ //traverse through the array
        const current = Math.max(first, second + array[i]); //max sum of i-2 and max sum of i-2 + array[i]
        second = first; //update second to first, we don't want to update first first bc we don't want to overwrite that value at first
        first = current; //update first to current
    }
    return first; //return the max subset sum no adjacent
}
//review this