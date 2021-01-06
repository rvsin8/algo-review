//Spiral Traverse
//Arrays

//notes
//in this problem we have a 2D array of integers - can be a rectangle or a square shape
//we want to return a one dimensional array of that 2D array in spiral order
//spiral order means you start at the top left and traverse to the right, then down then left then up and so on in a spiral shape
//popular problem
//can be solved iterative and recursively 

//algorithm
//what is the first thing we do, traverse the top row of the array, then the bottom order than the left and then the up
//we traverse the entire perimeter, then we traverse the perimeter in the inner perimeter
//logic for traversing the outer array - 
//grab the lengths of the 2dimensional arrays, get the dimensions 
//starting row - 
//starting col - 
//ending col - 
//ending row - 
//top row we can iterate via for loop, at each column we add the value of the 2d starting row and col
//have a pointer as c that iterates and adds to our array
//[1,2,3,4] first row 
//4 is the last of the first row, how do we go down ? we know we are only grabbing ele in the ending column.
//for ending column we can do a for loop for ths second column and just add the value at the ending column to the array via pointer r (this is confusing)
//when we want to go left that means we want to iterate in reverse order from our ending column to our starting column
//we don't to double count so we will be doing +1 in some cases
//we want to grab all of the val in reverse order inclusively 
//once it hits the starting column, we want to start one row above we dont want to double count 10 or 1, ending row - 1 and starting row + 1
//we need the same logic for the inner column

//time complexity 
//O(N) time where n is the total num of ele in the 2d array
//big N bc we traversing through every val at-least once

//space complexity 
//O(N) space, we are storing N value
