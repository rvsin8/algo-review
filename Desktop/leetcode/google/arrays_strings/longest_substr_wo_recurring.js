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


var lengthOfLongestSubstring = function(s) {
    if (!s) return 0; //if the string is empty return 0
    if (s.length < 2) return s.length; //if the string is less than 2 return the original string bc we are looking for re-occurring chars 
    var ls = s[0]; // longest string
    var cs = s[0]; // current string
    for (var i = 1; i < s.length; i++) { //iterate through the index
        var index = cs.indexOf(s[i]); // get index of current character in current string and save it in a variable 
        if (index > -1) { // found the character in current string
            if (cs.length > ls.length) { //if the length of the current string is greater than the longest string - replace it
                ls = cs; // update longest string, replace it
            }
            cs = cs.substring(index + 1,cs.length) + s[i]; // remove the first part of the string which contains repeated character //use this for the next longest string in the sentence
        } else {
            cs = cs + s[i];  //if not return the string count
        }        
    }
    if (cs.length > ls.length) { //if the length of the current string is greater than the longest string - replace it
        ls = cs;                
    }
    return ls.length;
};


//make sense out of this line by line