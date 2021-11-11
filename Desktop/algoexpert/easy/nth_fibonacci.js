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

//iterative solution is the best one bc it eliminates space
//we have an array of the last two fib numbers 
//we initialize the array to have the first 2 fib numbers, then we start calc every fib num there after
//while the counter is <= n keep calc the next fib num
//array is [0,1]
//next = 0 + 1 = 1, we get rid of the first num which is 0, and have an array of [1,1]
//next = 1 + 1 = 2, [1,2]
//so on ... 
//ay any given time we are only storing 2 fib numbers
//space is O(1) we are not storing anything except 2 values and no recursive calls

function getNthFib(n) {
    const lastTwo = [0, 1]; //we initialize our base case which is what the formula gives us - 0, 1
    let counter = 3; //from here we have to calc the third one
    while (counter <= n){ //while counter is less than or equal to n, we calc the fib num
        const nextFib = lastTwo[0] + lastTwo[1]; //next fib is equal to the sum of lasttwo at idx 0 and lasttwo at idx 1
        lastTwo[0] = lastTwo[1]; //we moved the val at idx 0 to the garbage and the last val at idx 1  to idx 0
        lastTwo[1] = nextFib; //the idx at 1 will now be the nextFib values
        counter++; //update our counter
    }
    return n > 1 ? lastTwo[1] : lastTwo[0]; //return lasttwo of 1 and our edge case is the first fib num, that is the only case we dont want to return lastwo of 1 but lastwo of 0
}