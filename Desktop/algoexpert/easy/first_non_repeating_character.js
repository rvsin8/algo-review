//First Non-Repeating Character
//Strings 

//my understandings 
//write a function that takes in a string of lower case letters and returns as an integer of the idx of the first non repeating letter
//"abcdcaf" we would return 1 which is b 
//non-repeating char - is a char that will not be repeated again in the string 
//only b d and f occur once but b is the first left to right alphabetical letter
//if the input string contains no nonrepeating letters we return -1
//it has to be lower case

//brute force 
//we can traverse char by char until we find the nonrepeating letter
//we traverse again looking for duplicates 
//"coolcode"
//foundDuplicate = False
//outer traversal stays at c
//inner traversal looks for dups
//

//optimal solution

//time complexity 

//space complexity 

function firstNonRepeatingCharacters(string){
    const characterFrequencies = {};

    for (const character of string) {
        if (!(character in characterFrequencies)) characterFrequencies[character] = 0; 
        characterFrequencies[character]++;
    }

    for (let idx = 0; idx < string.length; idx++) {
        const character = string[idx];
        if (characterFrequencies[character] === 1) return idx;
    }

    return -1;

}