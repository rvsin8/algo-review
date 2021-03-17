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
//this is better than the first solution due to the swaps 

//most optimal solution 
//set three variables - first = 0, second = 0. third = array.length - 1
//where we should insert our elements 
//f/s are at idx1 and t is at last idx
//we start wt the first idx which is 1 and since it is not in order we move the second pointer to the right
//s is now at 0 and we swap f and s --> [0,1,0,-1,-1,0,1,1]
//we move s again to 0 and f is now at 1 and we do another swap --> [0,0,1,-1,-1,0,1,1]
//s is at -1 which belongs to our third pointer so swap it with t --> [0,0,1,1,-1,0,1,-1], while moving t back
//s moves to another -1 and we do the same thing and swap with t
//so on until we have the solution and that happens when s surpasses t

//time complexity 
//O(n)

//space complexity 
//O(1)

//most optimal solution
function threeNumberSort(array, order) {
    const firstValue = order[0]; //define first value
    const secondValue = order[1]; //define second value 

    let firstIdx = 0; //first pointer to keep track of the indices where the values are stored
    let secondIdx = 0; //second pointer to keep track of the indices where the values are stored
    let thirdIdx = array.length - 1; //third pointer to keep track of the indices where the values are stored

    while (secondIdx <= thirdIdx) { //while the sec idx does not overlap the third
        const value = array[secondIdx]; //capture the value of our array to the second idx

        if (value === firstValue) { //if the value equals the firstvalue 
            swap(firstIdx, secondIdx, array); //then swap values at first and second idx
            firstIdx++; //keep going right
            secondIdx++; //keep going right 
        } else if (value === secondValue) { //
            secondIdx++;
        } else {
            swap(secondIdx, thirdIdx, array);
            thirdIdx -= 1;
        }
    }
    return array;
}

function swap(i, j, array) { //helper methods for swapping
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}