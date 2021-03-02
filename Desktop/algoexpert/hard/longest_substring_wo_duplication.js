//Longest Substring Without Duplication 
//Strings

//my understanding 
//this function gives you a string of characters and then return the longest substring in that string that does not hav e any replicated or duplicated letter
//"clementisacap" --> mentisac 
//we want to traverse through our string and keep track of the last seen letter
//whenever we get a letter, we will store in a hash table the corresponding idx of that letter
//build our hash table first so we see letter c:0, l:1, e:2, m:3 so we hit e again and the current longest substr is "clem" 4 letter
//we want to mark a starting idx so we know where we are
//keep updating if the length surpasses current longest substring 
//once we find a dup we update the start idx //startidx = max(startidx, lastseen[currentletter] + 1) //last seen is "clem"
//since e was last seen, so e was at 2 we add it by 1 and see if its greater and if it is we start from there 
//startIdx = max(0, 2+1) --> 3 so we move to idx3 aka m and start from there
//right now "me" is not greater than clem so we do not update but we move on to the next letter after me which is n
//update hash table always so now e: 4, n:5 and t:6 and i:7 are added to the hash table and menti is > clem so we not update the longest substr to "menti" and keep going to "mentisac"
//when we hit c we seen it at idx0 so now we update our start idx ? startidx = max(3, 0+1) = 3 so we are NOT updating the startIdx
//we hit c again at idx10 and update it to c:10 and do the same process all over again

//time complexity 
//O(n) where n is the length of the input string, we are iterating through a string and at each point we are accessing values / putting values in a hash table and theyre all constant time operations

//space complexity 
//0(min(n,a)) the minimum of n or a where n is length of the string and a is the length of the alphabet represented in our string; we are storing letters in a hashtable and storing a substring
//whatever we are storing has to be the min of n or a, the set of unique letters present 

function longestSubstringWithoutDuplication(string) {
    const lastSeen = {}; //hash table that will declare the most recent idx we seen an alphabet
    let longest = [0, 1]; //we wont store the string, but the array of 2 values - the starting string and ending string
    let startIdx = 0; //we start at idx 0
    for (let i = 0; i < string.length; i++) { //iteration 
        const char = string[i];
        if (char in lastSeen) { //if the char is seen before
            startIdx = Math.max(startIdx, lastSeen[char] + 1); //we update it and incoporate out formula ss well 
        }
        if (longest[1] - longest[0] < i + 1 - startIdx) { //if that position difference is less than i + 1 - startidx //we do i + 1 the position where our substr ends
            longest = [startIdx, i + 1]; //we update the longest
        }
        lastSeen[char] = i; //update the hash table
    }
    return string.slice(longest[0], longest[1]); //we slice the substr
}