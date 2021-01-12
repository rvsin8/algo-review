//Product Sum
//Recursion

//my notes
//we have a special array and we need to find the product of it
//a special array that consists of numbers or integers or special arrays
//if a special arrays can contain other special arrays then we know its recursions
//product sum is the sum of all the elements 
//when you get to a special array you multiple those ele plus their depth in the special array
//initial array depth is being multiplied by 1
//second depth array will be multiplied by 2
//third depth array will be multiplied by 3 

//[5,2,[7,-1],3,[6,[-13,8],4]] --> 12
//initialize sum to 0 and just start iterating and add the ele up
//sum =5, sum = 5 + 2 = 7
//now we git a special array, here we apply recursive approach
//if we hit an array --> add to the sum the product sum to the array recursively 
//the multiplier increases as we go deeper in the array
//sum = 0 . multiplier = 5
//step 1 sum = 5
//step 2 sum = 7 but is a special array so we call on it recursively call on the array where the sum will be = 0 and multiplier will equal to 2 --> 7 + (-1)  = 6 and then multiplied by 2 which is 12 and add that to the sum we had outside the bracket which is 7 and the total is 19 now
// step 3 19 + 3 = 22
//[6,[-13,8], sum = 0 and multiplier is 2 first level but next level sum is 0 and multiplier is 3 so we do :
//-13 + 8 = -5 then we do -5 * 3 = -15 then we do 6 + (-15) = =9 then -9 + 4 = -5 the  multiplier with 2 and get -10 
//add that to the total sum 22 + (-10) = 12 our answer

//time complexity
//O(n) where n is the total number of elements including the subarrays and so on so it will be O(12)

//space complexity
//it is a recursive call bc we call on a callstack
//it would be the max depth of the array here it is 3 recursive calls
//O(d) where d is the depth of the subarrays

function productSum(array, multiplier = 1) { //we pass in the multiplier --> the integer that we use to multiply the depths of social depths
    let sum = 0; //sum we start from 0 where we keep adding
    for (const element of array){
        if (Array.isArray(element)) { //in js if we do ".isArray" we can see if something is an array
            sum += productSum(element, multiplier + 1); //we call this recursively where we add the ele together and then multiply it by our multiplier
        } else {
            sum += element; //if its not another array just add the ele together in a sum
        }
    }
    return sum * multiplier;
}