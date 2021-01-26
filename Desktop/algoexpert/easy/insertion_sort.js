//Insertion Sort
//Sorting

//my understanding
//[8,5,2,9,5,6,3]
//[5,8,2,9,5,6,3] --> [2,5,8,9,5,6,3] --> [2,5,5,8,9,6,3] --> [2,5,5,6,8,9,3] --> [2,3,5,5,6,8,9]

//space complexity
//O(1)

//time complexity 
//O(n^2) - we have to do a bunch of comparisons and swaps 
//best case would be an already sorted list which would be O(N)

function insertionSort(array) {
    for (let i = 1; i < array.length; i++){// initialize for loop and start at the next one, we want to tentatively sort it at idx 11`
        let j = i; //insert the num by having a sex idx at j equal to i
        while (j > 0 && array[j] < array[j - 1]) { //while array j is greater than 0 and array j is less than array j - 1 -- out of order
            swap(j, j-1, array); //so we swap j, j-1 and array
            j -= 1; //and we decrement j and track the num we are trying to insert
        }
    }
    return array; //return sorted array

}

function swap(i, j, array) { //swap helper
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;

}