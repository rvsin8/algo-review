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
//[act,tac,cat], [flop, olfp], [yo, oy]

//time complexity 
//O(w*n*log(n) + n*w*log(w)) 
//we are sorting arrays its usually nlongn time where n is the time of input array 
//review this because its confusing 

//space complexity 
//O(wn) - w is the num of words that were given and n is the length of the longest word

//more optimal solution 
//once we sort every word and found all anagrams - we can dump them in a hash table and have all of the anagrams bucketed together
//we will go word by word and see if a word is in the hash table, if not we add it ins
//much simpler time

//time complexity
//O(w*n*log(n))

//space complexity
//O(wn)

//simpler solution
function groupAnagrams(words) { //takes in a string
    const anagrams = {}; //hashtable of anagrams
    for (const word of words) { //iterate for every word of words
        const sortedWord = word.split('').sort().join(''); //sorted version of this word 
        if (sortedWord in anagrams) { //if the sorted word is in the hash table of anagrams
            anagrams[sortedWord].push(word); //we will append //still dont know what append means
        } else {
            anagrams[sortedWord] = [word]; //if not then we add a new array of the word
        }
    }
    return Object.values(anagrams);
}