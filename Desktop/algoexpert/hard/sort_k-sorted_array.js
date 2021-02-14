//Sort K-Sorted Array
//Heaps

//my understanding
//we are given two inpurs - the first input is a partially sorted array and the second input will be the integer k and this value will always be greater than or equal to 0
//a k sorted array is defined as an array where the integers are k sorted from their sorted positions


//time complexity


//space complexity

function sortKSortedArray(array, k) {
    const minHeapWithKElements = new MinHeap(array.slice(0, Math.min(k+1, array.length)));

    let nextIndexToInsertElement = 0;
    for (let idx = k + 1; idx < array.length; idx++) {
        const minElement = minHeapWithKElements.remove();
        array[nextIndexToInsertElement] = minElement;
        nextIndexToInsertElement++;

        const currentElement = array[idx];
        minHeapWithKElements.insert(currentElement);
    }

    while (minHeapWithKElements.isEmpty()) {
        const minElement = minHeapWithKElements.remove();
        array[nextIndexToInsertElement] = minElement;
        nextIndexToInsertElement++;
    }
    return array;
 }

class MinHeap {
    constructor(array) {
        this.heap = this.buildHeap(array);
    }

    isEmpty() {
        return this.heap.length === 0;
    }

    buildHeap(array) {
        const firstParentIdx = Math.floor((array.length - 2) / 2);
        for (let currentIdx = firstParentIdx; currentIdx >= 0; currentIdx--) {
            this.siftDown(currentIdx, array.length - 1, array);
        }
        return array;
    }

    siftDown(currentIdx, endIdx, heap) {
        let childOneIdx = currentIdx * 2 + 1;
        while (childOneIdx <= endIdx) {
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentI
        }
    }
}