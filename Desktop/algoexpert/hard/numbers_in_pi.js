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


//time complexity 
//O(n^3 + m)

//space complexity
//O(n + m) n is the length of our pi number and m is the length of ours nums in the array and itll take m spaces bc we are throwing them in a hash table and n bc we have a cache that stores for every idx for these pi num the minimum number of spaces

function numbersInPi(pi, numbers) {
    const numbersTable = {};
    for (const number of numbers) {
        numbersTable[number] = true;
    }
    const minSpaces = getMinspaces(pi, numbersTable, {}, 0);
    return minSpaces ===Infinity ? -1 : minSpaces;
}

function getMinSpaces(pi, numbersTable, cache, idx) {
    if (idx === pi.length) return -1;
    if (idx in cache) return cache[idx];
    let minSpaces = Infinity;
    for (let i = idx; i < pi.length; i++) {
        const prefix = pi.slice(idx, i + 1);
        if (prefix in numbersTable) {
            const minSpacesInSuffix = getMinSpaces(pi, numbersTable, cache, i + 1);
            minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1);
        }
    }
    cache[idx] = minSpaces;
    return cache[idx];
}