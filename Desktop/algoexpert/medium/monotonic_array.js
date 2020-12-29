//Monotonic Array
//Arrays

//notes
//this question gives you an array of integers and asks you if that array is monotonic
//if we take all the integers in that array and read it from left to right or 
//to be monotonic is can either be entirely non-increasing or entirely non-decreasing so you are checking for two conditions
//monotonic integers can have an array that have two int that are equal to each other
//[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
//direction for first two ele [-1, -5] is going down
//[-5, -10] direction is also going down
//[-10, -1100] direction is also going down and so on



//time complexity
//O(N), probably not a better one than this bc we have to iterate through each ele in the array

//space complexity
//O(1)