//First Duplicate Value
//Arrays

//my understanding
//where the values are btw 1 <= array[i] <= 7 (whatever is the length of the array)
//we want to find the first duplicate values
//[2,1,5,3,3,2,4] //3 bc the dups occurs before 2
//we want the second occurrence with the minimum idx
//if we have no dups then return -1

//algorithm
//we can do it in one traversal and constant space complexity 
//[5,1,3,2,5,3]
//index = abs(value) - 1
//index = abs(5) - 1 = 4 --> [5,1,3,2-5,3] now if we hit that neg again that means we have seen this num before
//index = abs(1) - 1 = 0 --> [-5,1,3,2,-5,3]
//index = abs(3) - 1 = 2 --> [-5,1,-3,2,-5,3]
//index = abs(2) - 1 = 1 --> [-5,-1,-3,2,-5.3]
//index = abs(-5) - 1 = 4 --> since the value at 4 is already negative that is how we know this is the first dups
//return 5

//time complexity
//we traverse through it once left to right

//space complexity
//we are not storing anything 

function firstDuplicateValue(array) {
    for (const value of array) { //linear traversal where we loop through ele by ele
        const absValue = Math.abs(value); //if an array of abs val - 1 (to get the idx) and if its less than 0 then its a negative and we've seen
        if (array[absValue - 1] < 0) return absValue; //return thar value
        array[absValue - 1] *= -1; //map the val to indexes and look for them and make them negative
    }
    return -1 //return -1 for no dups
}