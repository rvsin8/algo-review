//Maximize Expression
//Dynamic Programming 

//my understanding 
//given one input that is an array willed with integers 
//determine the max value of the following expression 
//[3,6,1,-3,2,7]
//a,b,c,d // a < b < c < d
//expression - array[a] - array[b] + array[c] - array[d]
//if we get an array with less than 4 ele then return an empty array
//array[1] - array[3] + array[4] - array[5] = 6 - (-3) + 2 - 7 = 9 + (-5) = 4
//a b c d must be unique 
//once you declare a you can only pick the ele's after a

//optimal solution 
//a - b + c - d
//we want to maximize a - b and c - d bc we want the largest value added
//we want to minimize values b and d again to get the largest value
//


//time complexity 
//O(n)

//space complexity 
//O(n)

function maximizeExpression(array) {
    if (array.length < 4) return 0;

    const maxOfA = new Array(1).fill(array[0]);
    const maxOfAMinusB = new Array(1).fill(-Infinity);
    const maxOfAMinusBPlusC = new Array(2).fill(-Infinity);
    const maxOfAMinusBPlusCMinusD = new Array(3).fill(-Infinity);

    for (let idx = 1; idx < array.length; idx++) {
        const currentMax = Math.max(maxOfA[idx - 1], maxofA[idx - 1] - array[idx]);
        maxOfA.push(currentMax);
    }

    for (let idx = 1; idx < array.length; idx++) {
        const currentMax = Math.max(maxOfAMinusB[idx - 1], maxOfA[idx - 1] - array[idx]);
        maxOfAMinusB.push(currentMax);
    }

    for (let idx = 2; idx < array.length; idx++) {
        const currentMax = Math.max(maxOfAMinusBPlusC[idx - 1], maxofAMinusB[idx - 1] + array[idx]);
    }

    for (let idx = 3; idx < array.length; idx++) {
        const currentMax = Math.max(maxOfAMinusBPlusCMinusD[idx - 1], maxOfAMinusBPlusC[idx -1] - array[idx]);
        maxOfAMinusBPlusCMinusD.push(currentMax);
    }

    return maxOfAMinusBPlusCMinusD[maxOfAMinusBPlusCMinusD.length -1];
}