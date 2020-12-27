//Given two strings s and t, return the minimum window in s which will contain all the characters in t. If there is no such window in s that covers all characters in t, return the empty string "".
//
//Note that If there is such a window, it is guaranteed that there will always be only one unique minimum window in s.
//
// 
//
//Example 1:
//
//Input: s = "ADOBECODEBANC", t = "ABC"
//Output: "BANC"
//Example 2:
//
//Input: s = "a", t = "a"
//Output: "a"
// 
//
//Constraints:
//
//1 <= s.length, t.length <= 105
//s and t consist of English letters.
// 
//
//Follow up: Could you find an algorithm that runs in O(n) time?
//   Hide Hint #1  
//Use two pointers to create a window of letters in S, which would have all the characters from T.
//   Hide Hint #2  
//Since you have to find the minimum window in S which has all the characters from T, you need to expand and contract the window using the two pointers and keep checking the window for all the characters. This approach is also called Sliding Window Approach.
//
//L ------------------------ R , Suppose this is the window that contains all characters of T 
//                          
//        L----------------- R , this is the contracted window. We found a smaller window that still contains all the characters in T
//
//When the window is no longer valid, start expanding again using the right pointer. 