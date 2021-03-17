//Three Num Sort
//Sorting

//my understanding 
//given an input array that contains integers
//another array that contains three unique values
//[1,0,0,-1,-1,0,1,1]
//order = [0,1,-1]
//must not use any auxillary space so mutate the original input array
//naive approach using bucket sort 
//we will keep track of how mnay 0,1 and -1 we see
//3 O's, 3 1's, 2 -1's
//0,0,0,1,1,1,-1,-1
//first three idx will be 0 the next three will be 1 and last two will be 1
//we have to do two or four passes, one to iterate and one to change our original array and this is its downfall
//another way to do this is sort it in place round by round bc it'll only take two passes
//this is better than the first solution due to the swaps 

//most optimal solution 
//set three variables - first = 0, second = 0. third = array.length - 1
//where we should insert our elements 
//f/s are at idx1 and t is at last idx
//we start wt the first idx which is 1 and since it is not in order we move the second pointer to the right


//time complexity 
//O(n)

//space complexity 
//O(1)

