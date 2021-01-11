//Product Sum
//Recursion

//my notes
//we have a special array and we need to find the product of it
//a special array that consists of numbers or integers or special arrays
//if a special arrays can contain other special arrays then we know its recursions
//product sum is the sum of all the elements 
//when you get to a special array you multiple those ele plus their depth in the special array
//initial array depth is being multiplied by 1
//second depth array will be multiplied by 2
//third depth array will be multiplied by 3 

//[5,2,[7,-1],3,[6,[-13,8],4]] --> 12
//initialize sum to 0 and just start iterating and add the ele up
//sum =5, sum = 5 + 2 = 7
//now we git a special array, here we apply recursive approach
//if we hit an array --> add to the sum the product sum to the array recursively 
//the multiplier increases as we go deeper in the array
