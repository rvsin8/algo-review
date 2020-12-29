//Subarray Sort 
//Array

//notes
//find the smallest subarray inside our array, when you sort it - makes the entire array sorted
//return the smallest and largest idx of that SUBARRAY
//[1,2,4,7,10,11,7,12,6,7,16,18,19] --> [3,9]
//when you find one num not in order tat actually means you may have two nums not in order, so always theres going to be 2 nums UNSORTED
//if one num is out of order, it can lead to a huge subarray can be unsorted as well
//[1,2,3,4,5,-1] --> what will the extremities for our lowest and highest unsorted num
//[1,2,4,3,5,-1] --> we still have to sort the entire array as the example above
//if we want to find that subarray to sort everything in that array, we need to find every unsorted number and if there is one there has to be another, we need to find the greatest one and the smallest one

//algorithm
//we can start by iterating through our array, at each num determine if its out of order by comparing it to its adjacent numbers
//in the first example above 11 is unsorted, naturally the num after 11 is unsorted - 7
//so is 12 - so is 6
//11,7,12,6 are unsorted, lowest num is 6 and largest num is 12 after its sorted it would be idx 3 and 9
//we start from the left and 6 should be coming after 1,2,4 but before 7 which is idx 3
//12 we will start from the right, behind 19,18,16 but after 7 so idx 9.
//sort from idx3 to idx9

//time complexity
//O(N) where N is the length of the input array, first we find all of our unsorted num which is one pass which is O(N) time
//to find the final of the smallest and greatest num, all we have to do is a couple of iterations which are all O(N)

//space complexity
//O(1) everything happens in place, we are not going to be storing much

function subarraySort(array){
    let minOutOfOrder = Infinity; //initialize this to be infinity bc itll make our comparions a lot easier
    let maxOutOfOrder = -Infinity; //initialize this to be infinity bc itll make our comparions a lot easier

    for (let i = 0; i < array.length; i++){ //go through out entire array and keep track of our idx so we can compare our int to its adjacent numbers //if our num is out of order
        const num = array[i]; //keep track of our idx
        if (isOutOfOrder(i, num, array)){ //helper function to check and return a boolean if the current number is out of order
            minOutOfOrder = Math.min(minOutOfOrder, num); //we update our min number
            maxOutOfOrder = Math.max(maxOutOfOrder, num); //we update our max number
        }
    }

    if (minOutOfOrder === Infinity){
        return [-1, -1];
    }

    let subarrayLeftIdx = 0;
    while (minOutOfOrder >= array[subarrayLeftIdx]){
        subarrayLeftIdx++;
    }

    let subarrayRightIdx = 0;
    while (maxOutOfOrder <= array[subarrayRightIdx]){
        subarrayRight--;
    }

    return [subarrayLeftIdx, subarrayRightIdx];
}

function isOutOfOrder(i, num, array){
    if (i === 0) return num > array[i + 1];
    if (i === array.length - 1) return num < array[i -1];
    return num > array[i + 1] || num < array[i - 1];
}