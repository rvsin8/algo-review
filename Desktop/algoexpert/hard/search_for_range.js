//Search For Range
//Searching

//my understanding 
//you get a sorted array of integers as well as a target number
//it wants you to find the longest range in indices in the input array, where you can find the target num
//[0,1,21,33,45,45,45,45,45,45,61,71,73], 45 --> [4,9]
//when you apply binary search, once you find the number you are done but in this case we want the indices of the range
//we want the left extremity and the right extremity 
//we will hae a left and right pointer that will start on opposite sides
//we have 12 indices so we do (0 + 12) / 2 = 6 which will be our middle pointer at idx6
//we compare the num we are at to the target num, 45 is in the idx6 aka middle num and we found it
//we need to find the extremity however
//to check if it is the left extremity we will check the idx
//if its 0 we found the left extremity if not we check the left and it is we keep checking left if not we are at the left extremity 

//my solution
//bc the previous value does equal to our target as well, we will continue to apply bs on the left part of the array
//now our right idx moves from idx12 to idx5
//left idx at 0 and right at 5 so our middle idx is at 2 which is 21
//we move out left pointer now to idx3 and remove the left part
//lp is at 3 and rp is at 5
//3+5 = 8 --> idx4 which is 45 our target num and to the left is 33 so we now know we are at the left extremity 
//now we have [4, ?]
//we must look for the highest extremity 
//there is a 45 to the left so we must keep the bs algo going
//so at middle idx we have 45 and will do the opposite as above so 6 + 12 = 18 / 2 = 9


//time complexity 
//O(long(n))

//space complexity 
//O(1)

function searchForRange(array, target) {
    const finalRange = [-1, -1];
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, true);
    alteredBinarySearch(array, target, 0, array.length - 1, finalRange, false);
    return finalRange;

}

function alteredBinarySearch(array, target, left, right, finalRange, goLeft) {
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (array[mid] < target) {
            left = mid + 1;
        } else if (array[mid] > target) {
            right = mid - 1;
        } else {
            if (goLeft) {
                if (mid === 0 || array[mid - 1] !== target) {
                    finalRange[0] = mid;
                    return;
                } else {
                    right = mid - 1;
                }
            } else {
                if (mid === array.length - 1 || array[mid + 1] !== target) {
                    finalRange[1] = mid;
                    return;
                } else {
                    left = mid + 1;
                }
            }
        }
    }
}
