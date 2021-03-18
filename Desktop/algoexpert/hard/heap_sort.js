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
    const firstParentIdx = Math.floor((array.length - 2) / 2);//find the first value that is not a leaf, so a parent node by rounding down
    for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) { //in reverse range
        siftDown(currentIdx, array.length - 1, array); //we will sift down from currentidx to the final value of the heap/array
    }
}

function siftDown(currentIdx, endIdx, heap) {
    let childOneIdx = currentIdx * 2 + 1; //grab the two children nodes and pick the one that should be swapped
    while (childOneIdx <= endIdx) { //while our first child node is in the heap 
        const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1; //we can calculate child2node
        let idxToSwap;
        if (childTwoIdx !== -1 && heap[childTwoIdx] > heap[childOneIdx]) { //if our second child node exists and is > our first child node
            idxToSwap = childTwoIdx; //we can swap child2
        } else {
            idxToSwap = childOneIdx; //otherwise we can swap idx2
        }
        if (heap[idxToSwap] > heap[currentIdx]) { //if our currentNode is out of place bc it is smaller than one of our children node then we will swap them
            swap(currentIdx, idxToSwap, heap);//idk
            currentIdx = idxToSwap;//idk
            childOneIdx = currentIdx * 2 + 1; //idk
        } else {
            return;//idk
        }
    }
}

function swap(i, j, array) { //helper swap function
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}

//confused on sifting