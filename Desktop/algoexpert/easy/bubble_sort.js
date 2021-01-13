//Bubble Sort
//Sorting

//my notes
//important algorithm in terms of complexity analysis and helps with the other sort algorithms 
//the goal is to sort a list of numbers in ascending order
//we will iterate the array multiple times and perform swaps
//we will check the current num and if its smaller than or bigger than the next number
//if they are not in order, then we swap the nums in the array
//keep doing this until everything is sorted
//if there are no more swaps then we are done
//[8,5,2,9,5,6,3]
//[5,8,2,9,5,6,3]
//[5,2,8,9,5,6,3]
//[5,2,8,5,9,6,3]
//[5,2,8,5,6,9,3]
//[5,2,8,5,6,3,9] //we are done with ONE iteration but the entire array is not sorted
//[2,5,5,6,3,8,9] //second iteration
//[2,5,5,3,6,8,9] //third
//[2,5,3,5,6,8,9] //fourth
//[2,3,5,5,6,8,9] //fifth and final iteration

//time complexity 
//O(N^2) where n i the length of our input array - it is squared bc we are looping through the array multiple times until the array gets sorted
//in the worst case we will do a bunch of for loops
//O(N) when you are given a sorted array

//space complexity
//O(1) we are running the algorithm in place, we did not allocate additional memory

function bubbleSort(array) {
    let isSorted = false; //false at the beginning we assume the array is not sorted
    let counter = 0;
    while (!isSorted) { //while the array is NOT array
        isSorted = true; //we set the isSorted is true and then we jump into
        for (let i = 0; i < array.length - 1 - counter; i++) { //our for loop, we are comparing num to the next one so we don't need to go to the end
            if (array[i] > array[i + 1]) { //if the array is greater than its adjacent 
                swap(i, i + 1, array); //we swap them in order via helper function
                isSorted = false; 
            }
        }
        counter ++;
    }
    return array;
}

function swap(i, j, array) {
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}