//Longest Common Subsequence 
//Dynamic Programming 

//my understanding
//a subsequence is defined as a set of char in the case of a string that is obtained by removing other char in the string and keeping the remaining characters in their order
//the question gives you two strings and asks you to find the longest subsequence that is common to both strings
//use dynamic programming, we will use a 2D array to help us solve this problem
//str1: zxvvyzw
//str2: xkykzpw
//solution: xyzw
//str1:abc str2:ac //longest substring is AC
//we have to build an LCS string - we start by looking at the last letter and both end with C
//we know the LCS is going to end with C since they both end with C
//


//time complexity
//O(nm)

//space complexity 
//O(nm)

function longestCommonSubsequence(str1, str2) {
    const lengths = [];
    for (let i = 0; i < str2.length + 1; i++) {
        lengths.push(new Array(str1.length + 1).fill(0));
    }
    for (let i = 1; i < str2.length + 1; i++) {
        for (let j = 1; j < str1.length + 1; j++) {
            if (str2[i - 1] === str1[j - 1]) {
                lengths[i][j] = lengths[i - 1][j - 1] + 1;
            } else {
                lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
            }
        }
    }
    return buildSequence(lengths, str1);
}

function buildSequence(lengths, string) {
    const sequence = [];
    let i = lengths.length - 1;
    let j = lengths[0].length - 1;
    while (i !== 0 && j !== 0) {
        if (lengths[i][j] === lengths[i - 1][j]) {
            i--;
        }
    } else if (lengths[i][j] == lengths[i][j - 1]) {
        j--;
    } else {
        sequence.unshift(string[j - 1]);
        i--;
        j--;
    }
    return sequence;
}