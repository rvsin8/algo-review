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
}