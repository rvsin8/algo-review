//Longest Palindromic Substring
//Strings

//my understanding 
//gives us a string of characters, write a function that will return the largest substring in the string that is a palindrome
//abaxyzzyxf --> xyzzyx
//get all possible substrings and for each one check if it a palindrome  is one way to solve it but has bad time complexity 
//we can make this better - when youre in the middle of a palindrome we can see if the substr next to the letter are mirror-like
//we can treat each leeter as if it is the middle char of a palindrome
