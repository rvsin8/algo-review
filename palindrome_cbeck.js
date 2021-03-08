//Palindrom Check
//Strings

//my understanding
//a palindrome is a string written the same forward as backwards
//can solve it in a lot of ways
//straightforward way - create a new string going backwards and compare it to the original string 
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