//Group Anagram
//Strings

//my understanding 
//gives us a list of words / strings and write a function that will return a list of other lists of aanagrams 
//anagrams are words that are written in the same letters but written differently
//you can put each word in alphabetical order and match the strings that are identical
//[yo, act, flop, tac, cat, oy, olfp] --> [oy, act, flop, act, act, oy, flop] --> [act, act, act, flop, flop, oy, oy] --> [[yo,oy], [flop, olfp], [act, tac, cat]]
//create a new array of indices - 0 1 2 3 4 5 6
//we will re-arrange the indices in a sorted way --> 1act, 3act, 4act, 2flop, 6flop, 0oy, 5oy
//all the anagrams are now together 
//we can access original code via idx