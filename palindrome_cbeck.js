//Palindrom Check
//Strings

//my understanding
//a palindrome is a string written the same forward as backwards
//can solve it in a lot of ways
//straightforward way - create a new string going backwards and compare it to the original string //O(n^2) bc when we build up a new string via traversal in the original string and then we compare after 
//second way, instead of creating a new string - make a new list and then do a comparison - when we do our iteration  backwards and append the letters to the array //o(n) time
//third way is recursion, if the first letter is = to the last letter and our ispalindrome function is valid for the middle value then we return true //O(N)
//

//time complexity 
//O(n)

//space complexity 
//O(1)

function isPalindrome(string) {
    let leftIdx = 0;
    let rightIdx = string.length - 1;
    while (leftIdx < rightIdx) {
        if (string[leftIdx] !== string[rightIdx]) return false;
        leftIdx++;
        rightIdx--;
    }
    return true;
}