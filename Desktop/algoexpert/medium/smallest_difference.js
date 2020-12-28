//Smallest Difference
//Arrays

//gives your two array of integers and asks you to find a pair of numbers where one comes from the 1st array and another from the 2nd array with the smallest difference
//array A [-1, 5, 10, 20, 28, 3]
//array B [26, 134, 135, 15, 17]
//[28, 26]

//solve
//we will sort both arrays in ascending order before we do anything
//if we grab x3 (third int in array 1) and y5 (fifth int in array 2) and they are equal to each other, we have an edge case and we are done
//if x3 < y5, we would want to compute their difference and keep track of it
//we want to generate a new pair, the fact that these arrays are in ascending order can lead to an optimal way we can find a new pair
//x3 < y5, we know any num before x3 like x2 and x1 is going to be smaller than x3 AND smaller than y5 so the different btw any num behind x3 will be GREATER and same goes for any num > y5 will be a GREATER difference too, we can eliminate these int
//we can iterate through both arrays by a pointer (2 pointers, on for each array)

//[-1, 3, 5, 10, 20, 28] [15, 17, 26, 134, 135]
// p1 = -1, p2 = 15, diff = 16, so lets move p1 the right
// p1 = 3, p2 = 15, diff = 12, so lets move p1 the right
// p1 = 5, p2 = 15, diff = 10, so lets move p1 the right
// p1 = 10, p2 = 15, diff = 5, so lets move p1 the right
// p1 = 20, p2 = 15, diff = 5, so lets move p2 the right 20 is not less than 15
// p1 = 20, p2 = 17, diff = 3, so lets move p2 the right 20 is not less than 17
// p1 = 20, p2 = 26, diff = 6, so lets move p1 the right 20 is less than 26
// p1 = 28, p2 = 26, diff = 2 the answer

//time complexity
//O(N log(N) + M log(M)) where N is length of array 1 and M is of array 2
//we are sorting both arrays, so thats why it is x logx

//space complexity 
//O(1) bc we are sorting arrays in place and we are not storing any additional memory we are just keeping track of our best pairs
