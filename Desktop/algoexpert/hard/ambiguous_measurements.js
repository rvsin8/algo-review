//Ambiguous Measurements 
//Recursion

//my understanding
//we are given three inputs, one will be an array of different measuring cups 
//our goal is to measure out a certain volume of liquid, a low and high volume range which will be our other two input
//it is difficult cause of measuring cups are not precise 
//measuringcups = [[200, 210], [450, 465], [800, 850]]
//low = 2100
//high = 2300
//we have two measuring lines in our measuring cups pair --> first ele is the low line and the second is the high line
//we have to make sure the volume is btw those two volumes 
//we have to figure out that if the measuring cups we have can measure within our two low and high volumes
//we can measure whatever combo we find WITHIN 
//we cannot remove any of it from the pool of water or put volume in another cup from another cup
//O <= L <= H
//[450, 465]
//low = 450
//high = 465
//min = 900, max = 930 (2 times)
//min = 1800, max = 1860 (4 times)
//[200, 210]
//min = 2000, max = 2070 (1 time)
//min = 2200, max = 2280 (2 times)
//true bc its within 2100 - 2300
//base case --> if low < 0 and high < 0; return false
//if we never true, we are not able to solve this problem 
//rec(cups, low, high) low = 2100, high = 2300
//rec(cups, low = 1900, high = 2090)
//rec(cups, low = 1650, high = 1835)
//rec(cups, low = 1300, high = 1450)
//we will be doing a lot of unnecessary work and repeated recursive calls
//we will use memoization to avoid calc the same range multiple times, we will cache our solutions 
//we will store it in a hash table so whenever we see the range again, and we check it and just look at that result in the hash table


//time complexity
//O(low * high * n) where n is the number of cups we have, low and high reference the input parameters
//we need to reduce the high or low to be in the negatives and we dont know how long this will take us
//we do n work for every call so we multiply it by n

//space complexity
//O(low * high)
//we have a cache that will tell us for the function calls we already made, the most amount we will have will be low times high

function ambiguousMeasurements(measuringCups, low, high) { //
    const memoization = {}; //our cache that stores our answers
    return canMeasureInRange(measuringCups, low, high, memoization); //return the helper function that gives us the boolean answer
}

function canMeasureInRange(measuringCups, low, high, memoization) { //helper method
    const memoizeKey = createHashableKey(low, high); //another helper - combine both the high and low value to see if we can measure the range
    if (memoizeKey in memoization) return memoization[memoizeKey]; //if the memoized key is in the cache then return its stored value
    if (low <= 0 && high <= 0) return false; //base case if we hit the negatives 

    let canMeasure = false; //if we can or cannot measure a specific range
    for (const cup of measuringCups) { //for range
        const [cupLow, cupHigh] = cup; //so we get the low and high value
        if (low <= cupLow && cupHigh <= high) { //that means we are in the range
            canMeasure = true; //can return true
            break; //break out the for loop
        }

        const newLow = Math.max(0, low - cupLow); //we need to reduce the range 
        const newHigh = Math.max(0, high - cupHigh); //we need to reduce the range
        canMeasure = canMeasureInRange(measuringCups, newLow, newHigh, memoization); //recursive call that reduces
        if (canMeasure) break; //if you can measure we break from the for loop
    }

    memoization[memoizeKey] = canMeasure; //store our answer in our table
    return canMeasure; //return the result
}

function createHashableKey(low, high) { //helpers 2
    return low.toString() + ':' + high.toString(); //combine the two integers as a string
}
    
