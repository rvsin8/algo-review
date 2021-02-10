//Non-Constructible Change 
//Arrays

//my understanding 
//given an array of positive integers and qwill represent the values of coins and they do not have to be unique
//1 is 1 cent, 1007 is 1007 cent
//look at all these coins and return the minimum amount of change we CANNOT make


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