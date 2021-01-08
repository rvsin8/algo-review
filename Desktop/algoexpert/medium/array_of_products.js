//Array of Products
//Arrays

//notes
//our array will contain int > 2 so it will have at-least 3
//int can be positive 0, pos, neg and even dups
//the input and output have to be the same length 
//idx of the output cannot be the sum of that same idx of the input
//[5,1,4,2] --> [8,40,10,20] 8 --> 1 * 4 *2
//40 --> 5 * 4 * 2 and so on

//algorithm
//have to solve it without division
//traverse the array in a 
//we are going top be using two variables - leftrunningproduct and rightrunningproduct
//we can traverse through the array and get our leftrunningproduct in there
//then we will reverse and do the same for runningproduct and multiply by it from left product that is already in there
//[1,5,5,20] leftrunningproduct
