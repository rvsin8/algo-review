//First Non-Repeating Character
//Strings 

//my understandings 

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