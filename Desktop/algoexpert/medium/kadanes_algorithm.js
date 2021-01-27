//Kadane's Algorithm
//Famous Algorithm / Dynamic Programming

//my understanding 
//finding the subarray that produces the greatest sum from ele adjacent from each other
//[3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]
//we just need the sum not the actual subarray that contains the largest sum
//if we have negative numbers, it gets tricky - in some cases neg num well ruin potential candidates for greatest sums
//in some cases neg numbers won't be so bad 
//take subarrays and find the answer for every single one that it ends with