//Longest Palindromic Substring
//Strings

//my understanding 
//gives us a string of characters, write a function that will return the largest substring in the string that is a palindrome
//abaxyzzyxf --> xyzzyx
//get all possible substrings and for each one check if it a palindrome  is one way to solve it but has bad time complexity 
//we can make this better - when youre in the middle of a palindrome we can see if the substr next to the letter are mirror-like
//we can treat each leeter as if it is the middle char of a palindrome
//if the palindrome is odd length there is a middle letter if not its a direct mirror and pali is just between two letter
//a is the first letter of the pali -> can't nothing is to the left
//b is the next, to the left is a and to the right is a, so it is a palindrome aba, can we go farther out ? no bc in the left we are out of the string, we also have to check a even length check and a and b are not equal to each other 
//second a i the next one, to the left is b and to the right is x and is not a palindrome same goes for even length palindrome 
//and so on until we hit second z where we have a even palindrome with the length of 6


//more optimal time complexity
//O(n^2) where n is the length of input string
//we are iterating through the array once O(n) time, we do two expansions after every iterations one at the letter and one in btw the letters


//more optimal space complexity
//O(n) bc we slice and store the final substring

function longestPalindromicSubstring(string) {
    let currentLongest = [0, 1]; //define our current longest palindrome, we will update this throughout the algorithm //we initialize it to 0 and 1
    for (let i = 1; i < string.length; i++) { //as we traverse
        const odd = getLongestPalindromFrom(string, i - 1, i + 1); //helper function - it will have a middle char since it is odd length so we check left and right of that char via i + 1 / i - 1
        const even = getLongestPalindromFrom(string, i - 1, i); //helper function, even length it will be in btw the letter, we just use the current letter bc it is the center
        const longest = odd[1] - odd[0] > even[1] - even[0] ? odd : even; //takre a look at odd and take a look at even, check which one is longer by taking the difference from idx 1 and idx 0
        currentLongest = currentLongest[1] - currentLongest[0] > longest[1] - longest[0] ? currentLongest : longest; //when the current idx is longer than the longest we found by far
    }
    return string.slice(currentLongest[0], currentLongest[1]);
}

function getLongestPalindromFrom(string, leftIdx, rightIdx) {
    while (leftIdx >= 0 && rightIdx < string.length) {
        if (string[leftIdx] !== string[rightIdx]) break;
        leftIdx--;
        rightIdx++;
    }
    return [leftIdx + 1, rightIdx];
}
