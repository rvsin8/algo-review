//Quick Select
//Searching 

//time complexity 
//O(n) best
//O(n^2) worst 

//space complexity 
//O(1)

function quickselectHelper(array, startIdx, endIdx, position) {
    while (true) {
        if (startIdx > endIdx) {
            throw new Error('Your algorithm should never arrive here!');
        }

        const pivotIdx = startIdx;
        let leftIdx = startIdx + 1;
        let rightIdx = endIdx;
        while (leftIdx <= rightIdx) {
            if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) {
                swap(leftIdx, rightIdx, array);
            }
            if (array[leftIdx] <= array[pivotIdx]) {
                leftIdx++;
            }
            if (array[rightIdx] >= array[pivotIdx]) {
                rightIdx--;
            }
        }
        swap(pivotIdx, rightIdx, array);
        if (rightIdx === position) {
            return array[rightIdx];
        } else if (rightIdx < position) {
            startIdx = rightIdx + 1;
        } else {
            endIdx = rightIdx - 1;
        }
    }
}