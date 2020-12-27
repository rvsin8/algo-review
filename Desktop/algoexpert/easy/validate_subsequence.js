//Validate Subsequence 
//Arrays

//notes
//tests your concept of a subsequence, a subsequence is a concept in mathematics - a subsequence is a sequence that can be derived from another sequence by deleting some or no elements without changing the order of the remaining elements
//this question gives us two array of integers that are non empty and we need to write a function that will determine if the second array is a valid subsequence of the first sequence 
//for an array of integers to be a subsequence of another array, all the elements of the subsequence have to appear in the original array and in the same order [DOES NOT HAVE TO BE ADJACENT]
//[5, 1, 22, 25, 6, -1, 8, 10] --> [1, 6, -1, 10] this is a valid subsequence 

//solve
//we have to traverse both arrays, we need to see if the second array is in the first array and see if the order is correct in the first array
//we will have a pointer in the first ele in the sub and traverse through the first array with a second pointer until we find that first idx in subseq via for or while loop for the first array 
//once we find the first ele in our subseq, we need to look for the sec via second pointer and so on, we don't need to go back bc ORDER MATTERS
//we traverse both arrays simultaneously 

//time complexity 
//is O(N) time because we have to traverse through the entire array, comparison of numbers is a constant time operation

//space complexity
//is O(1) because we are not storing anything extra outside of pointers, no big variables or data or anything that will increase in size

function isValidSubsequence(array, sequence) {//takes in two nonempty arrays; array1 and subseq
    let arrIdx = 0; //keep track our position idx array
    let seqIdx = 0; //keep track our position in the seq array

    while (arrIdx < array.length && seqIdx < sequence.length){ //while both our array and sequence array are less than their respective lengths
        if (array[arrIdx] === sequence[seqIdx]) seqIdx++;
        arrIdx++;
    }
    return seqIdx === sequence.length;
}