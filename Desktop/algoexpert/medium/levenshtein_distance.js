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
//if str1[r] == str2[c] : E[r][c] == E[r-1][c-1]
//else E[r][c] = 1 + min(E[r][c-1], E[r-1][c], E[r-1][c-1])
