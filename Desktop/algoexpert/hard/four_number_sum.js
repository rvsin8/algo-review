//Four Number Sum
//Arrays

//my understanding 
//you get an array of distinct integers and a target number
//wants us ti implement a function that will give us all the four numbers that will give us the target number
//brute force is bad for time complexity
//a quadruplet can be expressed as a pair of numbers

//time complexity 
//O(n^2)

//space complexity 
//O(n^2)

function fourNumberSum(array, targetSum) {
    const allPairSums = {};
    const quadruplets = [];
    for (let i = 1; i < array.length - 1; i++) {
        for (let j = i + 1; j < array.length; j++) {
            const currentSum = array[i] + array[j];
            const difference = targetSum - currentSum;
            if (difference in allPairSums) {
                for (const pair of allPairSums[difference]) {
                    quadruplets.push(pair.concat([array[i], array[j]]));
                }
            }
        }
        for (let k = 0; k < i; k++) {
            const currentSum = array[i] + array[k];
            if (!(currentSum in allPairSums)) {
                allPairSums[currentSum] = [[array[k], array[i]]];
            } else {
                allPairSums[currentSum].push([array[k], array[i]]);
            }

        }
    }
    return quadruplets;
}

