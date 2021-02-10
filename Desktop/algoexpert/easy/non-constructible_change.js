//Non-Constructible Change 
//Arrays

//my understanding 
//given an array of positive integers and qwill represent the values of coins and they do not have to be unique
//1 is 1 cent, 1007 is 1007 cent
//look at all these coins and return the minimum amount of change we CANNOT make
//[7] --> 1
//[5,7,1,1,2,3,22] --> 20
//[1,2,5] --> 4

//my solution
//brute force approach is not optimal -- just loop through all positive integers until we hit one we cannot make
//optimal solution 
//first sort the input array - [1,1,2,3,5,7,22]; change = k
//1..k is all the change we can make
//first ele we hit is 1 meaning we can make 1 cent of change
//next ele is also a 1 which means we can make 2 cents of change 
//next is 2 and we can make 3 and 4 change
//next is 3, we can make 4, 5 and 6 cent of change
//then is 5, we can make from 1-12 cents
//then is 7, 1-18 yes 
//finally 22 --> we cannot make 20 cents
//change = previous coin + 1 //22 is greater thn our change + 1 and thats the first time it occurs in the array



//time complexity 
//O(nlogn)

//space complexity 
//O(1)

function nonConstructibleCHnage(coins) {
    coins.sort((a,b) => a - b);

    let currentChangeCreated = 0;
    for (const coin of coins) {
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1;

        currentChangeCreated += coin;
    }

    return currentChangeCreated + 1;
}