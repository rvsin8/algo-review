//Continuous Median
//Heaps

//my understandings 


//time complexity
// O(log(n))

//space complexity 
//O(n)

class ContinuousMedianHandler {
    constructor() {
        this.lowers = new Heap(MAX_HEAP_FUNC, []);
        this.greaters = new Heap(MIN_HEAP_FUNC, []);
        this.median = null;

    }

    insert(number) {
        if (!this.lowers.length || number < this.lowers.peek()) {
            this.lowers.insert(number);
        } else {
            this.greaters.insert(number);
        }
        this.rebalanceHeaps();
        this.updateMedian();
    }

    
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

function MAX_HEAP_FUNC(a,b) {
    return a > b;
}

function MIN_HEAP_FUNC(a,b) {
    return a < b;
}

