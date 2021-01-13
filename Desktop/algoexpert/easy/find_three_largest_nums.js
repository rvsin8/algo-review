//Find Three Largest Numbers
//Searching 

//my notes
//you are given an array of integers, may not be sorted, and our task is the three largest integers
//[141,1,17,-7,-17,-27,18,541,8,7,7] --> [18, 141, 541]
//we want to keep track and store the 3 largest num and keep traversing 
//[-,-,141]
//[-,1,141]
//[1,17,142] we shift 1 to the first place adn put 17 in idx 2 bc its the second largest num
//for the next 3 nums they are all negative numbers -7, -17, -27
//for 18 we get [17,18,141]
//for 541 we get [18,141,541]
//the rest are smaller than these 3 nums and that is our final array

//time complexity
//O(n) where n is the length of our input array, we have to traverse the entire array that why it is O(n)

//space complexity
//O(1) space bc we are not using any additional memory

