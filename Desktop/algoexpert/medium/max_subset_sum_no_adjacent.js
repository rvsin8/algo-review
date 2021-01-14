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