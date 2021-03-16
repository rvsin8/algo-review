//Quick Select
//Searching 

//my understanding 
//very similar to quicksort 
//we get an array of integers and a kth value, we need to find the kth smallest value
//quicksort - at random we pick a pivot and then have the rest of the arrays in order
//all the nums less than the pivot num would be to the left and greater than would be to its right
//since the nums in the array are randomized we usually just use the first num as a pivot in this case its 8
//[8,5,2,9,7,6,3], 3
//


//time complexity 
//O(n) best and avg
//O(n^2) worst 

//space complexity 
//O(1)

function quickselect(array, k) {
    const position = k - 1;
    return quickselectHelper(array, 0, array.length - 1, position);
}

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

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}