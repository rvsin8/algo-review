//Minimum Number of Jumps
//Dynamic Programming 

//my understandings

//time complexity 
//O(n)

//space complexity 
//O(1)

function minNumberOfJumps(array) {
    if (array.length === 1) return 0;
    let jumps = 0;
    let maxReach = array[0];
    let steps = array[0];
    for (let i = 1; i < array.length - 1; i++) {
        maxReach = Math.max(maxReach, i + array[i]);
        steps--;
        if (steps === 0) {
            jumps++;
        }
    }
}


