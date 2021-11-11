//Numbers In Pi
//Dynamic Programming 

//my understandings 
//we are given a string representation of the first n-digits of pie for example 3141592
//the idea is we need to find the minimum numbers of spaces we need to add such that all remaining numbers will be found in our fav list of numbers [3141, 5, 31, 2, 4159, 9, 42]
//3141 | 5 | 9 | 2 --> 3141, 5, 9, 2 thats not good, better is 31 | 4159 | 2 where we get 31, 4159 and 2
//start by putting space on prefixes --> 3 | 141592 now check if 3 is in the array, it is not so move on
//31 | 41592 --> 31 is in there 
//now lets do the same for 41592 --> 4 | 1592 but 4 is not there --> 41 | 592 but 41 is not there and neither is 415 but 4159 is 
// 31 | 4159 | 2 and 2 is in the list and we are done so we need an end condition
//minimum number of spaces was 2 for 3141592 but 1 for 41592 and 0 for just 0 we will store all these values
//now restart with the prefixes --> 314 | 1592 nope 314 does not exist but 3141 does
//now we look at 3141| 592 --> 5 is in there so now its --> 3141 | 5 | 92 and 9 is in there so 3141 | 5 | 9 | 2 --> 3 spaces but we dont store it cause 2 < 3
//we iterate through all of the main numbers, we call the main method on the remaining number 
//we can do this also right to left 
//

//time complexity 
//O(n^3 + m) for every prefix we are computing - O(n^2) - and then to slice each prefix O(n^3) - and m is the array we are given.

//space complexity
//O(n + m) n is the length of our pi number and m is the length of ours nums in the array and itll take m spaces bc we are throwing them in a hash table and n bc we have a cache that stores for every idx for these pi num the minimum number of spaces

function numbersInPi(pi, numbers) {
    const numbersTable = {}; //dump every number in a hash table
    for (const number of numbers) { //every number maps to true in numbers
        numbersTable[number] = true;
    }
    const minSpaces = getMinSpaces(pi, numbersTable, {}, 0); //helper method  being called
    return minSpaces === Infinity ? -1 : minSpaces; //our answer
}

function getMinSpaces(pi, numbersTable, cache, idx) { //helper method 
    if (idx === pi.length) return -1; //base case if the idx is the length of pi or out of bounds we return -1
    if (idx in cache) return cache[idx]; //if its already stored in our cache, just return that value
    let minSpaces = Infinity; //keep track of minimum spaces
    for (let i = idx; i < pi.length; i++) { //iterate
        const prefix = pi.slice(idx, i + 1); //slice it at prefix
        if (prefix in numbersTable) { //if the prefix is in the numbers table
            const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1); //then we want to look at our suffix
            minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);//get the minimum spaces
        }
    }
    cache[idx] = minSpaces;//store it in our cache
    return cache[idx];//review this
}

//review this