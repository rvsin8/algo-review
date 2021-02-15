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

//continue
//we want to sort into place immediately 
//we want to initialize min heap and a variable to keep track of the next position (SortedIdx)
//we start with k + 1 elements in our min heap and then we loop from the k + 1 INDX
//we will remove our element in our min heap and sort it into our sorted idx
//now add the next element to the min heap
//repeat for the next idx
//repeat the process until we have a sorted array

//time complexity
//O(nlog(k)) we iterate through our input array and it takes log k operation  //look into this time complexity bc its confusing

//space complexity
//O(k) we have k + 1 or k elements in our heap

function sortKSortedArray(array, k) {
    const minHeapWithKElements = new MinHeap(array.slice(0, Math.min(k+1, array.length))); //this is how we initialize our min heap

    let nextIndexToInsertElement = 0; //keep track of thius
    for (let idx = k + 1; idx < array.length; idx++) { //for idx in range to the array length
        const minElement = minHeapWithKElements.remove(); //remove and give us the minimum ele in our min heap
        array[nextIndexToInsertElement] = minElement; //we put it in the correct idx
        nextIndexToInsertElement++; //and we move on to the bnext idx

        const currentElement = array[idx]; //that element is kept in a variable 
        minHeapWithKElements.insert(currentElement); //we insert it in our current ele 
    }

    while (minHeapWithKElements.isEmpty()) { //while there are ele still left
        const minElement = minHeapWithKElements.remove(); //lets remove them 
        array[nextIndexToInsertElement] = minElement; //and put it in the correct position
        nextIndexToInsertElement++; //increment 
    }
    return array;
 }

class MinHeap {
    constructor(array) { 
        this.heap = this.buildHeap(array);
    }

    isEmpty() { //we use this as well
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
            const childTwoIdx = currentIdx * 2 + 2 <= endIdx ? currentIdx * 2 + 2 : -1;
            let idxToSwap;
            if (childTwoIdx !== -1 && heap[childTwoIdx] < heap[childOneIdx]) {
                idxToSwap = childTwoIdx;
            } else {
                idxToSwap = childOneIdx;
            }
            if (heap[idxToSwap] < heap[currentIdx]) {
                this.swap(currentIdx, idxToSwap, heap);
                currentIdx = idxToSwap;
                childOneIdx = currentIdx * 2 + 1;
            } else {
                return;
            }
        }
    }

    siftUp(currentIdx, heap) {
        let parentIdx = Math.floor((currentIdx - 1) / 2);
        while (currentIdx > 0 && heap[currentIdx] < heap[parentIdx]) {
            this.swap(currentIdx, parentIdx, heap);
            currentIdx = parentIdx;
            parentIdx = Math.floor((currentIdx - 1) / 2);
        }
    }

    peek() {
        return this.heap[0];
    }

    remove() { //for this problem
        this.swap(0, this.heap.length - 1; this.heap);
        const valueToRemove = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return valueToRemove;
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
    }

    swap(i, j, heap) { //for this problem 
        const temp = heap[j];
        heap[j] = heap[i];
        heap[i] = temp;
    }

}