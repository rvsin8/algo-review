//Max Sum Increasing Subsequence 
//Dynamic Programming 

//my understanding 
//a subsequences is a set of ele that can derive from another set by removing / keeping remaining elements in order
//[8,12,2,3,15,5,7] --> [8,12,15] = 35
//find the greatest sum we can generate from an increasing subsequence 
//cant have two num that are equal, strictly increasing 
//solve via dynamic programming - create a new array and at each idx store the greatest sum poss up until that idx
//need to give the sum and the subset that leads to that subset so we will need another array
//sums --> [8, 20, 2, 5, 35]
//we will traverse and imply intuition so at idx1 it will be 8 bc its 8
//at idx1 it will be 8 + 12 = 20
//at idx2 we have 2, we know 8 and 12 and > 2 an d they cannot be apart of 2's subsequence so it will be 2
//at idx3 we have 3 and it can include 2 since it comes after 2 and is increasing so at idx the highest subset sum we can have is 5
//at idx4 we have 15 and it can be included in the subset of all the previous nums such as 8 + 12 + 15 = 35 > 2 + 3 + 15 = 20
//to keep track of the nums we use we build another array that will keep track of our sequences 
//at each idx at that new seq array, we want to keep track of the previous idx --> [none, 0, none, 2, 1] // idx4 --> idx1 --> idx0 --> none; this is how we keep track
//currentNum = array[i] --> 5
//otherNum = array[j]  --> 0 <= j < i
//if otherNum < currentNum AND if sums[j] + currentNum >= sums[i] then we UPDATE the sum

//time complexity 
//O(n^2) where n is the length of our input array

//space complexity
//O(n) where n is the length of our input array

function maxSumIncreasingSubsequence(array) {
    const sequences = new Array(array.length);
    const sums = array.map(num => num);
    let maxSumIdx = 0;
    for (let i = 0; i < array.length; i++) {
        const currentNum = array[i];
        for (let j = 0; j < i; j++) {
            const otherNum = array[j];
            if (otherNum < currentNum && sums[j] + currentNum >= sums[i]) {
                sums[i] = sums[j] + currentNum;
                sequences[i] = j;
            }
        }
        if (sums[i] >= sums[maxSumIdx]) maxSumIdx = i;
    }
    return [sums[maxSumIdx], buildSequence(array, sequences, maxSumIdx)];
}

function buildSequence(array, sequences, currentIdx) {
    const sequence = [];
    while (currentIdx !== undefined) {
        sequence.unshift(array[currentIdx]);
        currentIdx = sequences[currentIdx];
    }
    return sequence;
}