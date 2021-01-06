//Longest Peak
//Arrays

//notes
//gives us an array of integers and asks us to return the length of the longest peak
//is a minimum of three consecutive integers that are positioned in such a way that they are strictly increasing until they hit some value and decrease
//[1,2,3,3,4,0,10,6,5,-1,-3,2,3] peak has a length of 6 bc 0 to (-3)
//can have multiple peaks but we need the longest one

//algorithm
//find all the peaks, compare their length and find the longest
//top be the tip of the peak, it has to be greater than the 2 adjacent values
//we go through every value, we start at the second value and end at the second to last value of the array
//2 is not the tip of a peak bc its not greater than 3
//3,3 is not the of a peak bc it is not greater than 3
//4 is because it is greater than both 3 and 0
//10 is because it is greater than 0 and 6
//the rest are not
//now we have to compare the peak lengths, from both of the peaks lets traverse to the left and right and see how long we can go without strictly decreasing
//once the num stop decreasing we found the edges
//[3,4,0] vs [0,10,6,5,-1-3], length 3 vs 6

//time complexity
//with no peaks its constant time
//with peaks its linear time O(N) bc if you have an array full of peaks - you stop at the points where the triangles meet
//you will never visit more than N nodes/elements in an array again

//space complexity
//
