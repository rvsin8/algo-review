//Sort K-Sorted Array
//Heaps

//my understanding
//we are given two inpurs - the first input is a partially sorted array and the second input will be the integer k and this value will always be greater than or equal to 0
//a k sorted array is defined as an array where the integers are k sorted from their sorted positions
//[3,2,1,5,4,7,6,5] 
//we can look at 1 being in idx 2 which is three positions away from where it should be at position 0
//we can look at 4 which is one position away
//no integer is more than 3 positions away from its sorted idx

//my solution
//the first thing we need to place at idx 0, we know it has to be to the left of the middle bc at most that integer can only be 3 idx away
//we only need to look at k+1 elements to consider for each idx
//for position 1 we can look 3 to the left or the right --> k + 1 elements to consider
//first we find idx 0 which is 1 the minimum element 
//then we pick the second minimum which is 2
//[5,4,7,6,5] are left and in our new array we have [1,2,3] so far
//so on
//much more efficient way than merge sort and other sort methods 
//a min heap may be a better method to use for this algorithm
//a min heap is a tree-like algorithm --> all children nodes must be greater than their parent node, so node A will be the minimum integers in the tree
//since A will always be the minimum, it will take constant time to look at O(1)
//to remove A would take O(log(n))
//to add an element takes the same as O(log(n))
//O(n) is what it takes to initialize a brand new heap

//time complexity
//O(nlog(k))

//space complexity
//O(k)

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