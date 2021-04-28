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
//and check the boolean
//when we do find a dup, we update the foundDuplicate to False
//we do this until we hit "l"
//this takes O(n^2) time bc we traverse twice nested traverse but constant space we dont save anything O(1)

//optimal solution
//use a data structure to help with time complexity 
//use a HashMap <Char, Count>
//initialize our hash map and then traverse through each letter in the string 
//keep count of every time we hit our letters
//{'c': 2, 'o': 3, 'l': 1, 'd': 1, 'e': 1} 
//we will see the first letter that occurs once 

//time complexity 
//O(n) we traverse n char and again to see the dups, 2N but we drop the constant so N

//space complexity 
//O(1) we are using constant space complexity and bc it is lower case it helps bc only 26 letters possible 

function firstNonRepeatingCharacters(string){
    const characterFrequencies = {}; //initialize our ash map

    for (const character of string) { //loop through the string char by char
        if (!(character in characterFrequencies)) characterFrequencies[character] = 0; //if we have not seen this char in the hash map we will add it to our hash map
        characterFrequencies[character]++; //we will add one to every time we see the char
    }

    for (let idx = 0; idx < string.length; idx++) { //idx traversal
        const character = string[idx]; //get the char
        if (characterFrequencies[character] === 1) return idx; //return the idx of the char that only occurs once
    }

    return -1;

}