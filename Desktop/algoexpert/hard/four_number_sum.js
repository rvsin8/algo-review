//Four Number Sum
//Arrays

//my understanding 

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
        }
    }
}

