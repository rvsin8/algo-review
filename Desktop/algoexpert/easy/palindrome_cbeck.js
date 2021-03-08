//Palindrom Check
//Strings

//my understanding
//a palindrome is a string written the same forward as backwards
//can solve it in a lot of ways
//straightforward way - create a new string going backwards and compare it to the original string //O(n^2) bc when we build up a new string via traversal in the original string and then we compare after 
//second way, instead of creating a new string - make a new list and then do a comparison - when we do our iteration  backwards and append the letters to the array //o(n) time and space
//third way is recursion, if the first letter is = to the last letter and our ispalindrome function is valid for the middle value then we return true //O(N) space and time
//last way is O(1) space - iteratively via pointers - compare first pointer in the beginning to the second pointer in the end and just keep checking as you move them close to each other until they overlap
//a recursive call can become tail recursive via tail recursion

//time complexity 
//O(n) //have to iterate through the length of the string

//space complexity 
//O(1) we are not storing anything outside the pointers

function isPalindrome(string) {
    let leftIdx = 0; //set the first pointer in the beginning 
    let rightIdx = string.length - 1; //set the second pointer at the end
    while (leftIdx < rightIdx) { //when the first pointer does not overlap the second 
        if (string[leftIdx] !== string[rightIdx]) return false; //if the two letters at both pointers do no equal each other they equal false
        leftIdx++; //increment left pointer
        rightIdx--; //increment right pointer 
    }
    return true; //once they overlap we know its true
}