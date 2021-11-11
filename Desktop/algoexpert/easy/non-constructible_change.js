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
//when we hit a coin greater than our change plus one then we cannot make that copin
//[1,1,4] --> 4 > 2 + 1 so we cannot make 3
//V > C + 1


//time complexity 
//O(nlogn) we need sort our input array and then irate through it in one time

//space complexity 
//O(1) we actually are going to sort this input array in place - mutate

function nonConstructibleChange(coins) {
    coins.sort((a,b) => a - b); //we sort this input array in place

    let currentChangeCreated = 0; //c value we keep track and update
    for (const coin of coins) { //all the coin in the coins
        if (coin > currentChangeCreated + 1) return currentChangeCreated + 1; //if the coin is created than the current change + 1 then we have to return the current change + 1 bc it cannot be made

        currentChangeCreated += coin; //otherwise we add the value of the coin to the current change created
    }

    return currentChangeCreated + 1; //if we break out the loop this will be our answer bc that is the next change we cannot make in array after going through every coin
}