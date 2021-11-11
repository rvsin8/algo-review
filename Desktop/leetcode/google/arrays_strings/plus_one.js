//Given a non-empty array of decimal digits representing a non-negative integer, increment one to the integer.
//
//The digits are stored such that the most significant digit is at the head of the list, and each element in the array contains a single digit.
//
//You may assume the integer does not contain any leading zero, except the number 0 itself.
//
// 
//
//Example 1:
//
//Input: digits = [1,2,3]
//Output: [1,2,4]
//Explanation: The array represents the integer 123.
//Example 2:
//
//Input: digits = [4,3,2,1]
//Output: [4,3,2,2]
//Explanation: The array represents the integer 4321.
//Example 3:
//
//Input: digits = [0]
//Output: [1]
// 
//
//Constraints:
//
//1 <= digits.length <= 100
//0 <= digits[i] <= 9

//my understanding
//you just add 1 to the end
//pretend the array is a number and we just add one to it

//[4,5,6]
//the key is to look at the last number in the array
//if its not 9, increment that num by 1 and we are done
//if its 9, we change the 9 to a 0 and we keep looping until we find another 9 and if its not a 9 we add 1 so 459 is 460
///999 + 1 is 1000 and now we have 4 digits instead of 3
//^if the last num is a 9 we add another element and add 1so 1000

var plusOne = function(digits) { //digits is just an array we need to increment by 1
    for (let i = digits.length - 1; i >= 0; i--){ //loop us through the array
        if (digits[i] != 9) { //if its not a 9
            digits[i]++; //we just increment it
            return digits;
        } else {
            digits[i] = 0; //if it is a 9 we need to change it to 0 and moves on to the next loop
        }

    }
    digits.unshift(1); //if there are all 9's we add a new ele 1 to the front of the array
    return digits;

};
