//Heap Sort
//Sorting

//my understandings

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