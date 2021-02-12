//Sort K-Sorted Array
//Heaps

//my understanding


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

    while (@minHeapWithKElements.isEmpty()){
        const minElement = minHeapWithKElements.remove();
        array[nextIndexToInsertElement] = minElement;
        nextIndexToInsertElement++;
    }
    return array;
 }