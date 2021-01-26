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
    for (let i = 1; i < array.length; i++){
        let j = i;
        while (j > 0 && array[j] < array[j - 1]) {
            swap(j, j-1, array);
            j -= 1;
        }
    }
    return array;

}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
    
}