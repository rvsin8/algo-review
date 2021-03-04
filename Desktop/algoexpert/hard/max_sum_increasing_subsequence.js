//Max Sum Increasing Subsequence 
//Dynamic Programming 

//my understanding 
//a subsequences is a set of ele that can derive from another set by removing / keeping remaining elements in order
//[8,12,2,3,15,5,7] --> [8,12,15] = 35
//find the greatest sum we can generate from an increasing subsequence 
//cant have two num that are equal, strictly increasing 
//solve via dynamic programming - create a new array and at each idx store the greatest sum poss up until that idx
//need to give the sum and the subset that leads to that subset so we will need another array
//sums --> []
//we will traverse and imply intuition 
//

//time complexity 
//O(n^2)

//space complexity
//O(n)

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