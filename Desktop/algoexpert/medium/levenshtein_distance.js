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

//"" y a b d
//""
//a
//b
//c