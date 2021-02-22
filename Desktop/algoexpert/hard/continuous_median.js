//Continuous Median
//Heaps

//my understandings 
//wants us to build a continuous median handler class to receives continuous stream of numbers and return the median of all those numbers in constant number
//running the insertion function 
//the median is the num in the middle of a set of numbers
//even #s the avg of the middle of two nums in the middle, odd it is just the middle num
//every time we insert a num, we input it in its correct sorted position
//insertion method runs in O(n) time - there is a better way to do this which is using heaps
//we want to keep track of those middle numbers 
//maybe have two buckets thar represent the lower half and greater half of numbers while also having the min num in the greater half and the max num in the lower half bc we can use these two nums to always compute the median
//if its an odd num and the lower half has more nums then the higher half than lower half max will be the median and vice versa
//heaps is a ds that allows us to keep track of the min or max val of a set
//every time we insert a number we can keep track of the min heap of the higher values and the max heap of the lower values
//whenever we insert a num itll be in the lower half or the greater half and then compute the average of that set instantly
//insertion in heaps is quicker - we add the num to the end of the heap and so the min val of the high numbers is on top

//my solution
//5, 10, 100, 200, 6, 13, 14
//5, 7.5, 10, 55, 10, 11.5, 13
//lower half aka max heap - 5, 6, 10
//greater half aka min heap - 100, 200
//median - 5, 7.5, 10, 55, 10
//we will remove the top value of the higher half and bring it to th lower half bc both buckets carry an uneven amount of numbers, this happens in constant time bc of heaps
//10 got moved to the lower half so 10 + 100 = 110 / 2 = 55 median
//when 6 is added its an odd num, lower half has more nums than higher half so we pick lower half max value which is 10
//we add 13 which goes to the higher half since it is greater than the lower half max which is 10 and we compute 
//so on ...

//time complexity
// O(log(n)) bc inserting and removing in a heap runs in this time

//space complexity 
//O(n) we do have to store all these numbers, so n is the amount of numbers we store

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

    rebalanceHeaps() {
        if (this.lowers.length === this.greaters.length) {
            this.median = (this.lowers.peek() + this.greaters.peek()) / 2;
        } else if (this.lowers.length > this.greaters.length) {
            this.median = this.lowers.peek();
        } else {
            this.median = this.greaters.peek();
        }   
    }

    updateMedian() {
        if (this.lowers.length === this.greaters.length) {
            this.median = (this.lowers.peek() + TouchList.greaters.peek()) / 2;
        } else if (this.lowers.length > this.greaters.length) {
            this.median = this.lowers.peek();
        } else {
            this.median = this.greaters.peek();
        }
    }

    getMedian() {
        return this.median;
    }
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

    remove() { 
        this.swap(0, this.heap.length - 1; this.heap);
        const valueToRemove = this.heap.pop();
        this.siftDown(0, this.heap.length - 1, this.heap);
        return valueToRemove;
    }

    insert(value) {
        this.heap.push(value);
        this.siftUp(this.heap.length - 1, this.heap);
    }

    swap(i, j, heap) {
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

