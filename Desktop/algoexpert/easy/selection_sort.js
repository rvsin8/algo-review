//Selection Sort
//Sorting

//you are given a list of numbers and  and ordered and unordered list
//[8,5,2,9,5,6,3]
//we have a pointer where we traverse and array to find a smaller num than 8 aka 5
//we keep doing bc 2 is less than 5
//2 is the smallest so we did not find any smaller num in the array so we swap the 2 with 8 so it can be the first ele in the array
//and so on
//[2,5,8,9,5,6,3]
//[2,3,8,9,5,6,5] and so on

//time complexity
//O(n^2) - we kept iterating through the array and reduce the length by 1 each iteration


//space complexity
//O(1) - we are not storing anything just swapping

function selectionSort(array) {
    let startIdx = 0; //keep track of the idx of the first num of the unsorted sublist
    while (startIdx < array.length - 1){ //while current idx is less than array length - 1
        let smallestIdx = startIdx; //smallest idx will be the first idx integer 
        for (let i = startIdx + 1; i < array.length; i++){ //for idx in range
            if (array[smallestIdx] > array[i]) smallestIdx = i; //is the smallest idx is > the i we are at, then the smallest idx becomes i at the end of the array
        }
        swap(startIdx, smallestIdx, array); //we then swap
        startIdx++;
    }
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}