//Three Num Sort
//Sorting

//my understanding 
//given an input array that contains integers
//another array that contains three unique values
//[1,0,0,-1,-1,0,1,1]
//order = [0,1,-1]
//must not use any auxillary space so mutate the original input array
//naive approach using bucket sort 
//we will keep track of how mnay 0,1 and -1 we see
//3 O's, 3 1's, 2 -1's
//0,0,0,1,1,1,-1,-1
//first three idx will be 0 the next three will be 1 and last two will be 1
//we have to do two or four passes, one to iterate and one to change our original array and this is its downfall
//another way to do this is sort it in place round by round bc it'll only take two passes
//

//time complexity 
//O(n)

//space complexity 
//O(1)

//naive approach 
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