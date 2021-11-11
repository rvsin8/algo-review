//Quick Select
//Searching 

//my understanding 
//very similar to quicksort 
//we get an array of integers and a kth value, we need to find the kth smallest value
//quicksort - at random we pick a pivot and then have the rest of the arrays in order
//all the nums less than the pivot num would be to the left and greater than would be to its right
//since the nums in the array are randomized we usually just use the first num as a pivot in this case its 8
//[8,5,2,9,7,6,3], 3
//8 is our pivot, L idx will be one position to the right and the right pointer to the end
//if the left pointer is smaller we leave it at its position and move on
//then look at the right pointer and if it smaller than 8 then we need to swap it so we leave it there for now
//back to left pointer we are 2 which is less than 8 so we move on to 9
//9 is > 8 and we can swap that with 3 where our right pointer is
//[8,5,2,3,7,6,9], 3
//now our left pointer is at 7 and right pointer is at 6 which are both smaller than 9
//now the left pointer is at 9 our final num in the array
//swap the pivot with the right idx and we get
//[6,5,2,3,7,8,9], 3
//with quickselect we don't care about sorting the array we just care about the kth smallest num
//since our pivot num was 8 and it is at idx 5 we know its not our third smallest number bc it is not in idx 3
//since idx5 is > idx2 so we can disregard idx5 and idx6 bc they are > 8 and it is not our kth smallest num
//we move our right pointer to the left to 7 and left pointer to the right of the first num which is 5 bc our pivot is 0
//[6,5,2,3,7], 3
//so we look at our left pointer which is 5 and it is < 6 so we move to the next ele which is 2
//we look at our right pointer which is 7 and it is > 6 so we move the right pointer to 3
//2 is also smaller than 6 so now it overlaps with the right pointer
//3 is smaller than 6 so we need to swap 3 bc its above the right pointer and < 3
//move the left to the right as it passes the right pointer so a swap happens
//[3,5,2,6,7,8,9], 3 --> 6 is now in its proper place and so is 7 so we discard this and everything to the right
//now try again via [3,5,2]
//pivot is 3, left is 5 and right is 2
//5 > 3 left and 2 < 3 right so we swap --> [3,2,5] 
//now the two pointer pass each other and we do a final pivot --> [2,3,5,6,7,8,9]
//is 3 the 3rd smallest number, it is not but its pos 2 is less than pos 3 so now we completely eliminate the left side --> [5]
//base case is when we have one ele and we have 5 in position idx2 and we found out answer


//time complexity 
//O(n) best and avg --> where n is the length of the input array
//O(n^2) worst  --> the pivot will divide our array into one tiny subarray and one huge subarray //look into this in details 

//space complexity 
//O(1)

function quickselect(array, k) {
    const position = k - 1; //handle off by one errors
    return quickselectHelper(array, 0, array.length - 1, position); //just call our helper
}

function quickselectHelper(array, startIdx, endIdx, position) { //helper method 
    while (true) { //use a while loop bc this is a iterative solution that uses constant space
        if (startIdx > endIdx) { //if at any point our startidx is > our ending idx then something has gone wrong
            throw new Error('Your algorithm should never arrive here!'); //raise an exception
        }

        const pivotIdx = startIdx; //our pivot is our first idx
        let leftIdx = startIdx + 1; //left would begin one ele after our pivot 
        let rightIdx = endIdx; //last num in the array
        while (leftIdx <= rightIdx) { //while the left is smaller and equal to the right idx
            if (array[leftIdx] > array[pivotIdx] && array[rightIdx] < array[pivotIdx]) { //if the left pointer is > pivot and the right pointer is < pivot
                swap(leftIdx, rightIdx, array); //then its time to swap values 
            }
            if (array[leftIdx] <= array[pivotIdx]) { //if at any time the value of the left pointer is <= to our pivot
                leftIdx++; //keep iterating 
            }
            if (array[rightIdx] >= array[pivotIdx]) { //if at any time the value of the right pointer is greater /equal to our array we iterate backwards 
                rightIdx--; //backwards 
            }
        }
        swap(pivotIdx, rightIdx, array); //we can swap the pivot num and the right num
        if (rightIdx === position) { //if right idx == position
            return array[rightIdx]; //we are done we have found the kth smallest num
        } else if (rightIdx < position) { //otherwise if the right pointer is < pos
            startIdx = rightIdx + 1; //we update our starting idx to be right idx + 1
        } else {
            endIdx = rightIdx - 1; //update our ending idx
        }
    }
}

function swap(i, j, array) { //regular swap method 
    const temp = array[j];
    array[j] = array[i];
    array[i] = temp;
}