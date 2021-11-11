//Levenshtein Distance
//Dynamic Programming

//my understanding
//this question asks use to find the minimum edit operations that need to be performed on the first string to obtain the second
//insertion, deletion or substitution
//str - "abc" - 
//str2 - "yabc" 
//str1 --> insert y and sub c to d so the answer is 2
//for long strings, dynamic programming will help
//we will build a 2D array, at each idx we will store the min operations we need to turn it into another substring 

//   "" y a b d
//"" 0  1 2 3 4
//a  1  1 1 2 3
//b  2  2 2 1 2
//c  3  3 3 2 2

//we are going to call this 2D array our "edits table" or "E"
//if str1[r-1] == str2[c-1] : E[r][c] == E[r-1][c-1]
//else E[r][c] = 1 + min(E[r][c-1], E[r-1][c], E[r-1][c-1])

//time complexity
//O(nm) where n is the length of str1 and m is the length of str2


//space complexity
//O(nm) we are only storing in that 2D array and nothing else
//we may also just use the last two rows --> making it O(min(n,m))

function levenshteinDistance(str1, str2){
    const small = str1.length < str2.length ? str1 : str2;
    const big = str1.length >= str2.length ? str1 : str2;
    const evenEdits = [];
    const oddEdits = new Array(small.length + 1);
    for (let j = 0; j < small.length + 1; j++){
        evenEdits.push(j);
    }

    for(let i = 1; i < big.length + 1; i++){
        let currentEdits, previousEdits;
        if (i % 2 === 1){
            currentEdits = oddEdits;
            previousEdits = evenEdits;
        } else {
            currentEdits = evenEdits;
            previousEdits = oddEdits;
        }
    }

    currentEdits[0] = i;
    for (let j = 1; j < small.length + 1; j++){
        if (big[i - 1] === small[j - 1]) {
            currentEdits[j] = previousEdits[j - 1];
        } else {
            currentEdits[j] = 1 + Math.min(previousEdits[j - 1], previousEdits[j], currentEdits[j - 1]);
        }
    }
    return big.length % 2 === 0 ? eventEdits[small.length] : oddEdits[small.length];
}

//completely lost