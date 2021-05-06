//Maximize Expression
//Dynamic Programming 

//my understanding 

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
}