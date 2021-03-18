//Heap Sort
//Sorting

//my understandings
//you are given an array of nums and the goal is to sort it in ascending order
//divide your array into 2 subarrays, one will be unsorted and the other subarray will be sorted
//the unsorted subarray will be a max heap
//a heap is not a sorted ds, but it has a root value must be the greatest value in the entire value same goes for min heap
//heaps can be represented as arrays
//max heap --> [9,8,6,5,5,2,3]
//swap the 9 with the final value of the array which is 3
//[3,8,6,5,5,2,9]
//we reduced the max heap by 1 and increased our sorted list by 1
//8 is > 3 and we can swap them both then we can look at 3 and the two 5's and since it is also less than 5 then we can swap --> [8,5,6,3,5,2,9]
//8 is the greatest value of that max heap and we can swap it with last value in that subarray which is 2 --> [2,5,6,3,5,8,9]
//the logic is that you begin by building a max heap with the array you have and then you continually swap the greatest value of the max heap with last value and then you reposition the new root value via sifting it down
//sifting --> [6,5,2,3,5,8,9] and swap 6 with 5 --> [5,5,2,3,6,8,9]
//5 is the largest and swap it with 3 --> [3,5,2,5,6,8,9]
//reposition the 3 --> [5,3,2,5,6,8,9]
//swap 5 and 2 --> [2,3,5,5,6,8,9]

//time complexity 
//O(nlog(n)) where n is the length of our array 

//space complexity 
//O(1) we are not storing anything we are doing everything in place

function heapSort(array) {
    buildMaxHeap(array); //build a max heap out of this array
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) { //for the ending idx of the max heap, reverse order
        swap(0, endIdx, array); //swap the root and endidx
        siftDown(0, endIdx - 1, array); //then sift down the array after
    }
    return array;//answer
}

function buildMaxHeap(array) {
    const firstParentIdx = Math.floor((array.length - 2) / 2);
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
        siftDown(currentIdx, array.length - 1, array);
    }
}

function siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1;
    while (childOneIdx <= endIdx) {
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
        let idxToSwap;
        if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) {
            idxToSwap = childTwoIdx;
        } else {
            idxToSwap = childOneIdx;
        }
        if (heap[idxToSwap] > heap[currentIdx]) {
            swap(currentIdx, idxToSwap, heap);
            currentIdx = idxToSwap;
            childOneIdx = currentIdx * 2 + 1;
        } else {
            return;
        }
    }
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}