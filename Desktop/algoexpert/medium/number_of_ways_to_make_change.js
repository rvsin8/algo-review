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
//next is $2 --> 1 < 2, ways[2] = ways[2-1] --> 1 or ways[2] = ways[2] - ways[2-1] = 1 as well
//we know now the entire first row will have atleast 1 way to make change
//we move on to 5, we cannot use a $5 donation for 0, 1, 2, 3, and 4. 
//for ways[5] += ways[5-5] --> 1 + 0 = 5 so we update 5 to 2.
//if denom <= amount then we will say ways[amount] += ways[amount-denom]
//5,6,7,8,9 will all be updated to 2 and 10 will be 3 --> ways[10] += ways[10-5] --> 1 + ways[5] --> 1 + 2 = 3
//ways[10] = 3 + ways[10] --> 3 + 1 = 4

//time complexity
//O(nd) where d is the number of denominations, we are iterating through each domination and elements as well

//space complexity
//O(n) where n is our target amount

function numberOfWaysToMakeChange(n, denoms) { //n is an integer val and so is denoms
    const ways = new Array(n + 1).fill(0); //fill the new array with 0
    ways[0] = 1;//base case - at idx 0 we will set it to 1
    for (let denom of denoms) { //for this for loop
        for (let amount = 1; amount < n + 1; amount++) { //for amount in range
            if (denom <= amount){ //if denom is less or equal to amount then 
                ways[amount] += ways[amount - denom]; //we will update our ways array, which is ways amount - denom //this is equivalent to ways[amount] = ways[amount] + ways[amount - denom]
            }
        }
    }
    return ways[n]; //return the ways of n
}