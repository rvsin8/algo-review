//Given a string s, find the length of the longest substring without repeating characters.
//
// 
//
//Example 1:
//
//Input: s = "abcabcbb"
//Output: 3
//Explanation: The answer is "abc", with the length of 3.
//Example 2:
//
//Input: s = "bbbbb"
//Output: 1
//Explanation: The answer is "b", with the length of 1.
//Example 3:
//
//Input: s = "pwwkew"
//Output: 3
//Explanation: The answer is "wke", with the length of 3.
//Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.
//Example 4:
//
//Input: s = ""
//Output: 0
// 
//
//Constraints:
//
//0 <= s.length <= 5 * 104
//s consists of English letters, digits, symbols and spaces.

//brute force 
// "abcabcbb" for each char we are creating a set and checking all the following char in the set with no repeats
// first set - [a, b, c] we are done checking bc a repeats, 3
// second set - [b, c, a] we are dome checking bc b repeats, 3
// third set - [c, a, b] we are done checking bc c repeats, 3
// ....

// second solution is the sliding window method
// first step set is [a] the sliding window begins
// second step is [a,b] the sliding window is bigger
// third step is [a,b,c] and even bigger
// fourth step is [a,b,c,a] we have to now change the window since we have a repeating character
// fifth step is [b,c,a] we got rid of the most left element
// sixth step is [b,c,a,b] we have to now change the window since we have a repeating character
// seventh step is [c,a,b] we got rid of the most left element
// and so on

//sliding window method

var lengthOfLongestSubstring = function(s) {
    let count = 0; //start count
    let i = 0; //get the index for the start
    let j = 0; //get the index for the end
    let n = s.length; // the length as well 

    let set = new Set();

    while (i < n && j < n){ //i and j need to both be less than the length
        let char = s.charAt(j); //this is the new character or the most right character
        if(!set.has(char)) { //if the char is not in the set
            set.add(char); //we have to add the char
            j++; //we can move the right side of the window
            count = Math.max (count, j - i); //j - i gives you the pos of the end of the window and the start
        } else {
            set.delete(s.charAt(i)); //in the other case we have to delete the first ele
            i++; //will move the left part of the sliding window
        }



    }
    return count;
};