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
//take out the C and now find the LCS of AB / A
//we compare the last two letter which is B and A and they do not equal to each other
//so we remove one of them and then compare 
//if we remove A then we compare an empty string with AB
//if we remove B we compare A to A
//so we get AC and its better than ""C
//we can remove the two A's and now we are left with two empty strings and that tells us we are done
//the empty string serves as our base case
//we can initialize the first row and col as a bunch of empty strings and the lcs is an empty string
//when we compare to letters and they do not equal each other we go with the lcs
//finally when we arrive to z and z = z, we remove z and add it to our lcs which would be z, we append to the lcs that is diagonally from the string
//the lcs of our "" and z with the entire second string is z
//next we go to x and x, they equal to each other the lcs between the "" z x and the entire second string is x
//eventually we compare y and y, so we append y to x and we have xy so the remainder of that row is xy bc it is larger than just x
//eventually then we will hit z and z so we get xyz
//the final idx we hit xyzw
//time and space complexity for this is O(NM * min(N,M))
//we can get a O(nm) space and time complexity by not storing the lcs and concatonating things
//we can use pointers and booleans to see if at a certain index whether or not we need to store it 
//have a pointer to the diagonal when we do comparisons 
//

//time complexity
//O(nm) where n and m represent our two strings and we iterate through two strings


//space complexity 
//O(nm) where n and m represent our two strings and we iterate through two strings

function longestCommonSubsequence(str1, str2) {
    const lengths = []; //set the lengths to an empty array
    for (let i = 0; i < str2.length + 1; i++) { //iterate through the array
        lengths.push(new Array(str1.length + 1).fill(0)); //set up an new empty array, the 0 values represent if the letter is not being used
    }
    for (let i = 1; i < str2.length + 1; i++) { //iterate through the array
        for (let j = 1; j < str1.length + 1; j++) { //
            if (str2[i - 1] === str1[j - 1]) {
                lengths[i][j] = lengths[i - 1][j - 1] + 1;
            } else {
                lengths[i][j] = Math.max(lengths[i - 1][j], lengths[i][j - 1]);
            }
        }
    }
    return buildSequence(lengths, str1);
}

function buildSequence(lengths, string) { //helper method 
    const sequence = [];
    let i = lengths.length - 1;
    let j = lengths[0].length - 1;
    while (i !== 0 && j !== 0) {
        if (lengths[i][j] === lengths[i - 1][j]) {
            i--;
    
    } else if (lengths[i][j] == lengths[i][j - 1]) {
        j--;
    } else {
        sequence.unshift(string[j - 1]);
        i--;
        j--;
    }
    return sequence;
}