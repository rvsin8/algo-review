//Numbers In Pi
//Dynamic Programming 

//my understandings 

//time complexity 
//O(n^3 + m)

//space complexity
//O(n + m)

function numbersInPi(pi, numbers) {
    const numbersTable = {};
    for (const number of numbers) {
        numbersTable[number] = true;
    }
    const minSpaces = getMinspaces(pi, numbersTable, {}, 0);
    return minSpaces ===Infinity ? -1 : minSpaces;
}