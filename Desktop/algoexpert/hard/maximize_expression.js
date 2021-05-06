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
//maximize a - b then a - b  + c and then a - b + c - d
//at idx the max value of a we can have is 3
//at idx 1 the max value we can have is 6
//at idx2 the max value we can have is 6
//at idx3, it is again and so on 
//at idx5 the max value is 7 for a
//A [3,6,6,6,6,7]
//we cannot go from idx0 so we start at idx1 and the max value we can have then is -3
//at idx2 it will be 5
//at idx3 it will be 3 and so on
//A-B [-,-3,5,9,9,9]
//next is A - B + C
//[-,-,-2,-2,11,16]
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