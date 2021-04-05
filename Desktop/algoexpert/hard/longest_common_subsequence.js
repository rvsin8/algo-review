//Longest Common Subsequence 
//Dynamic Programming 

//my understanding

//time complexity

//space complexity 

function longestCommonSubsequence(str1, str2) {
    const lengths = [];
    for (let i = 0; i < str2.length + 1; i++) {
        lengths.push(new Array(str1.length + 1).fill(0));
    }
    
}