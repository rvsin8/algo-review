//Ambiguous Measurements 
//Recursion

//my understanding
//we are given three inputs, one will be an array of different measuring cups 
//our goal is to measure out a certain volume of liquid, a low and high volume range which will be our other two input
//it is difficult cause of measuring cups are not precise 
//measuringcups = [[200, 210], [450, 465], [800, 850]]
//low = 2100
//high = 2300
//we have two measuring lines in our measuring cups pair --> first ele is the low line and the second is the high line
//we have to make sure the volume is btw those two volumes 
//we have to figure out that if the measuring cups we have can measure within our two low and high volumes
//we can measure whatever combo we find WITHIN 
//we cannot remove any of it from the pool of water or put volume in another cup from another cup
//O <= L <= H
//[450, 465]
//low = 450
//high = 465
//min = 900, max = 930 (2 times)
//min = 1800, max = 1860 (4 times)
//[200, 210]
//min = 2000, max = 2070 (1 time)
//min = 2200, max = 2280 (2 times)
//true bc its within 2100 - 2300

//time complexity
//O(low * high * n)

//space complexity
//O(low * high)

function ambiguousMeasurements(measuringCups, low, high) { //
    const memoization = {};
    return canMeasureInRange(measuringCups, low, high, memoization);
}

function canMeasureInRange(measuringCups, low, high, memoization) {
    const memoizeKey = createHashableKey(low, high);
    if (memoizeKey in memoization) return memoization[memoizeKey];
    if (low <= 0 && high <= 0) return false;

    let canMeasure = false;
    for (const cup of measuringCups) {
        const [cupLow, cupHigh] = cup;
        if (low <= cupLow && cupHigh <= high) {
            canMeasure = true;
            break;
        }

        const newLow = Math.max(0, low - cupLow);
        const newHigh = Math.mac(0, high - cupHigh);
        canMeasure = canMeasureInRange(measuringCups, newLow, newHigh, memoization);
        if (canMeasure) break;
    }

    memoization[memoizeKey] = canMeasure;
    return canMeasure;
}

function createHashableKey(Low, high) {
    return low.toString() + ':' + high.toString();
}
    
