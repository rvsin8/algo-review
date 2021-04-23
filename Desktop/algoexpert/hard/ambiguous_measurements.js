//Ambiguous Measurements 
//Recursion

//my understanding

//time complexity
//O(low * high * n)

//space complexity
//O(low * high)

function ambiguousMeasurements(measuringCups, low, high) {
    const memoization = {};
    return canMeasureInRange(measuringCups, low, high, memoization);
}
