//Move Element to End
//Arrays

//notes
//given an array of integers, and a second integer
//we have to write an algorithm in which we find all instances of our target int and move all those instances to the back
//you have to do this in place, in the same array
//the order of the other numbers do not matter
//you can do this in linear time via process of elimination 
//sorting the array is too easy but no
//we want to keep track of two pointers, one in the beginning of the array and another at the end of the array bc the end of the array is where we want to swap /store them
//we are going to be swapping values
//[2,1,2,2,2,3,4,2]
//we dont want to move 2 in the end, so shift that sec pointer to the left to 4
//4 is not the num we want so we want it in the beginning of the array and we have our first pointer pointing at 2 and we want that in the end of our array
//swap 2 and 4 then
//[4,1,2,2,2,3,2,2] now our first pointer moves to the right which is 1 and the end of the array me move to the left which is 3
//since the first pointer is at 1 is where we want it, we will move to the right to 2
//swap first pointer 2 with 3 and we get [4,1,3,2,2,2,2,2] and we are done


//time complexity
//linear O(n), you can't do this better bc you have to traverse the entire array no matter that maybe binary search but no
//we started with the pointers, we visited every idx once and then performed some swaps which are constant time operations


//space complexity 
//O(1) we are doing it in place, we did not use a axillary data structure

function moveElementToEnd(array, toMove){
    let i = 0; //pointer in the beginning
    let j = array.length - 1; //pointer in the end
    while (i < j){ //once i > j they have overlapped and we have seen the entire array and we exit the loop
        while (i < j && array[j] === toMove) j--; //while array[j] is equal to the value to move, we decrement j
        if (array[i] ==== toMove) swap(i, j, array);
        i++;
    }
    return array;
}

function swap(i, j, array){
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}
