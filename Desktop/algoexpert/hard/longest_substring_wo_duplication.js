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

//time complexity 
//O(n)

//space complexity 
//0(min(n,a))

function longestSubstringWithoutDuplication(string) {
    const lastSeen = {};
    let longest = [0, 1];
    let startIdx = 0;
    for (let i = 0; i < string.length; i++) {
        const char = string[i];
        if (char in lastSeen) {
            startIdx = Math.max(startIdx, lastSeen[char] + 1);
        }
        if (longest[1] - longest[0] < i + 1 - startIdx) {
            longest = [startIdx, i + 1];
        }
        lastSeen[char] = i;
    }
    return string.slice(longest[0], longest[1]);
}