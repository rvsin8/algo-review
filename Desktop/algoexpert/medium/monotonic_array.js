//Monotonic Array
//Arrays

//notes
//this question gives you an array of integers and asks you if that array is monotonic
//if we take all the integers in that array and read it from left to right or 
//to be monotonic is can either be entirely non-increasing or entirely non-decreasing so you are checking for two conditions
//monotonic integers can have an array that have two int that are equal to each other
//[-1, -5, -10, -1100, -1100, -1101, -1102, -9001]
//one way to go about is, is by confirming is if the array is non-decreasing or non-increasing
//lets eliminate one criteria
//the array above is non-increasing
//we would iterate through an array and see which direction is each ele trending by comparing ele and their adjacent ele
//do one iteration through the array assuming it is non-increasing or non-decreasing
//im literally confused

//time complexity
//O(N), probably not a better one than this bc we have to iterate through each ele in the array


//space complexity
//O(1) we are just keeping track of two variable

//
//function isMonotonic(array){ //take in an array
//    if (array.length <= 2) return true; 
//
//    let direction = array[1] - array[0];
//    for (let i = 2; i < array.length; i++) { //we will 
//        if (direction === 0){
//            direction = array[i] - array[i - 1];
//            continue;
//        }
//        if (breaksDirection(direction, array[i-1], array[i])){
//            return false;
//        }
//    }
//
//    return true;
//}
//
//function breaksDirection(direction, previousInt, currentInt) {
//    const difference = currentInt - previousInt;
//    if (direction > 0) return difference < 0;
//    return difference > 0;
//}
//

function isMonotonic(array){ //take in an array
    let isNonDecreasing = true; //first var, if its trending upwards set to true
    let isNonIncreasing = true; //sec var, if its trending downwards set it to true

    for(let i = 1; i < array.length; i++){ //we start from idx 1 bc we need to compare the sec ele to the first and iterate through the length of the array
        if (array[i] < array[i - 1]) isNonDecreasing = false; //if the first ele is less than the sec then it is NOT non-decreasing
        if (array[i] > array[i - 1]) isNonIncreasing = false; //if the first ele is greater than the sec than it is NOT non-increasing
    }

    return isNonDecreasing || isNonIncreasing; //return whatever boolean returns
}