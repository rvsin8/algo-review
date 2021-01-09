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
//index = abs(1) - 1 = 0 