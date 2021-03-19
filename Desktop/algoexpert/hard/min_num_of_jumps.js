//Minimum Number of Jumps
//Dynamic Programming 

//my understandings
//famous interview question
//[3,4,2,1,2,3,7,1,1,1,3] --> 4 jumps
//give us an array of integers 
//each integers represent the number of steps you can take forward from that idx
//given this array, what is the minimum amount of steps we need to take to go from the first idx to the last idx
//build an array of the same length as our input array and it will represent the minimum num of jumps we'll take from the first idx to that idx
//idx0 --> 0
//idx1 which is 4, can we jump from idx j aka first idx to i
//if array[j] + j >= i we can jump from j to i
//jumps[i] = minimum { jumps[i] or jumps[j] + 1}
//j = 0; array[j] = 3, i = 1 --> o + 3 >= 1 and 0 + 1 < infinity so we update the array --> [0,1,inf,inf,inf,inf,inf,inf,inf,inf,inf]
//j = 1; array[j] = 3, i = 2 --> o + 3 >= 2 and 0 + 1 < infinity so we update the array --> [0,1,1,inf,inf,inf,inf,inf,inf,inf,inf]
//[0,1,1,2,2,3,inf,inf,inf,inf,inf]
//im lost 
//this was O(N) space and O(N^2) time

//optimal solution
//[3,4,2,1,2,3,7,1,1,1,3] --> 4 jumps
//at each point we know what the max reach is 3
//at idx1 which is 4 so we know the maxreach is 5 aka 1 + 4
//at each idx we know what the max reach is
//whenever we iterate through our array we update our maxreach and steps
//for i in range (1, length of array): we update our maxReach = max (maxReach, array[i] + i) and then steps -= 1 whenever we iterate out array, we update our maxreach but reduce the num of steps we have every time we update

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


