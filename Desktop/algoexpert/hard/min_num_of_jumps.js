//Minimum Number of Jumps
//Dynamic Programming 

//my understandings
//famous interview question
//[3,4,2,1,2,3,7,1,1,1,3] --> 4 jumps
//give us an array of integers 
//each integers represent the number of steps you can take forward from that idx
//given this array, what is the minimum amount of steps we need to take to go from the first idx to the last idx
//build an array of the same length as our input array and it will represent the minimum num of jumps we'll take from the first idx to that idx
//


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
            steps = maxReach - i;

        }
    }
    return jumps + 1;
}


