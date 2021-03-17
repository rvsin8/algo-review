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