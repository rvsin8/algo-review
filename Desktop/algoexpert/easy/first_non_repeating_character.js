//First Non-Repeating Character
//Strings 

//my understandings 

//time complexity 

//space complexity 

function firstNonRepeatingCharacters(string){
    const characterFrequencies = {};

    for (const character of string) {
        if (!(character in characterFrequencies)) characterFrequencies[character] = 0; 
    }

}