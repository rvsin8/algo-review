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
//time complexity is not great for this bc it will be a complexity of 2^n bc we keep calling the call over and over again 
//re hear the time complexity explanation 
//space would be O(N) bc fib(6) calls fib(5) then fib(4) and so on... until we hot hit our base case and we store all of thus

//second recursive call that uses memoization aka caching
//store the solution of n in a hash table and access them in O(1) in the future
//if n is in memoize then return memoize of n else store in it in the memoize that is not in there yet in a hash table  then return memoize 
//this algo will run in O(N) time because we calculate every fib num ONCE and we store it in the hash table
//space complexity will remain O(1) we still have a call stack via recursive call and we have a memoize hash table