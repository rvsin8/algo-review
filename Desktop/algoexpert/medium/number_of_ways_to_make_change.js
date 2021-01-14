//Number of ways to make change
//Dynamic Programming 

//my notes
//we get two inputs the first one is an integer value like $10
//second input is coin denomination that are at our disposal 
//$10 [1,5,10,25] --> answer is 4
//we have an infinite num of coins at our disposal 
//4 ways are 1) 1 x 10, 2 x 5, 1 x 5 + 5 x 1, 10 x 1

//algorithm 
//there is one way to make $0 which is nothing
//next one is $1 is 1<=1 --> yes update our ways array --> ways[1] += ways[1-1] or ways[1] = ways[1] + ways[1-1] //wtf is going on // 0 + 1 = 1
//next is $2 --> 1 < 2, ways[2] = ways[2-1] --> 1