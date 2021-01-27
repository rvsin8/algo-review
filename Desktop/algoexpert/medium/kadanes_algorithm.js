//Kadane's Algorithm
//Famous Algorithm / Dynamic Programming

//my understanding 
//finding the subarray that produces the greatest sum from ele adjacent from each other
//[3,5,-9,1,3,-2,3,4,7,2,-9,6,3,1,-5,4]
//we just need the sum not the actual subarray that contains the largest sum
//if we have negative numbers, it gets tricky - in some cases neg num well ruin potential candidates for greatest sums
//in some cases neg numbers won't be so bad 
//take subarrays and find the answer for every single one that it ends with like 3 or 5 or etc
//if it ends with 3 the greatest sum is obviously 3
//with array [3,5] the answer is 8
//with 3,5 and -9 [3,5,-9] is -1
//we can either sum up 3 5 -9 1 which is 0 or just 1 and here 1 is greater than 0 --> so we choose 1
//max Sum = -1 + 1 or just 1 (we will do this at each idx to see if we want to recount from that idx)
//maxEndingHere = max{maxEndingHere + num} or max{num}
//so 3+5 = 8 --> now we compare 8 + (-9 or -9 will be 8 + -9  and so on ...
//we come up with all the greatest sum at each idx and it is 19 for this
//to improve time and space complexity we can have - maxSoFar where we keep track of the highest sum of a subset so far --> maxSoFar = max maxSoFar} or max{maxEndingHere}

//time complexity
//O(n) where n is the length of the input array

//space complexity 
//O(1) not storing anything outside of maxending here and maxsofar

function kadanesAlgorithm(array) {
    let maxEndingHere = array[0];
    let maxSoFar = array[0];
    for (let i = 1; i < array.length; i++) {
        const num = array[i];
        maxEndingHere = Math.max(num, maxEndingHere + num);
        maxSoFar = Math.max(maxSoFar, maxEndingHere);
    }
    return maxSoFar;
}