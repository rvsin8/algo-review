//Three Num Sort
//Sorting

//my understanding 
//given an input array that contains integers
//another array that contains three unique values
//[1,0,0,-1,-1,0,1,1]
//order = [0,1,-1]
//must not use any auxillary space so mutate the original input array


//time complexity 
//O(n)

//space complexity 
//O(1)

function threeNumberSort(array, order) {
    const valueCounts = [0,0,0];

    for (const element of array) {
        const orderIdx = prder.indexOf(element);
        valueCounts[orderIdx]++;
    }

    for (let idx = 0; idx < 3; idx++) {
        const value = order[idx];
        const count = valueCounts[idx];

        const numElementsBefore = valueCounts.slice(0, idx).reduce((a,b) => a + b, 0 );
        for (let n = 0; n < count; n++) {
            const currentIdx = numElementsBefore + n;
            array[currentIdx] = value;
        }
    }
    return array;
}