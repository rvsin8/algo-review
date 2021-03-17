//Heap Sort
//Sorting

//my understandings
//you are given an array of nums and the goal is to sort it in ascending order
//divide your array into 2 subarrays, one will be unsorted and the other subarray will be sorted
//the unsorted subarray will be a max heap
//a heap is not a sorted ds, but it has a root value must be the greatest value in the entire value same goes for min heap
//heaps can be represented as arrays
//max heap --> [9,8,6,5,5,2,3]

//time complexity 
//O(nlog(n))

//space complexity 
//O(nlog(n))

function heapSort(array) {
    buildMaxHeap(array);
    for (let endIdx = array.length - 1; endIdx > 0; endIdx--) {
        swap(0, endIdx, array);
        siftDown(0, endIdx - 1, array);
    }
    return array;
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