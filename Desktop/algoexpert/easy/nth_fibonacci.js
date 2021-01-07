//Nth Fibonacci
//Recursion

//notes
//we are looking for the nth fibonacci number ion a sequence
//fib sequence is a famous seq of num in math
//first 2 num are 0 and 1, every num after can be found by adding the two previous nums
//math formula is fib(n) = fib(n-1) + fib(n-2) for n > 2

//algorithm
//a lot of ways to solve this
//recursive solution is similar to the formula
// if n == 2 return 1 like the formula our base case
// if n == 1 return 0 like the formula our base case
// else return the formula --> fib(n-1) + fib(n-2)
// fib of 4 --> (fib(4-1)) + fib(4-2 )--> fib(3) - fib(2) --> recall the function for 3 but 2 would be 1
// fib(3) --> do the same as above

