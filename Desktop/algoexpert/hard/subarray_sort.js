//Subarray Sort 
//Array

//notes
//find the smallest subarray inside our array, when you sort it - makes the entire array sorted
//return the smallest and largest idx of that SUBARRAY
//[1,2,4,7,10,11,7,12,6,7,16,18,19] --> [3,9]
//when you find one num not in order tat actually means you may have two nums not in order, so always theres going to be 2 nums UNSORTED
//if one num is out of order, it can lead to a huge subarray can be unsorted as well
//[1,2,3,4,5,-1] --> what will the extremities for our lowest and highest unsorted num
//[1,2,4,3,5,-1] --> we still have to sort the entire array as the example above
//if we want to find that subarray to sort everything in that array, we need to find every unsorted number and if there is one there has to be another, we need to find the greatest one and the smallest one