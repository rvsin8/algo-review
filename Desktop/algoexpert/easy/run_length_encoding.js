//Run-Length Encoding 
//Strings

//my understanding 
//lost list - when you can use to output to get back to the input and vice versa ?
//"13A" is confusing bc how do we know thr 1 and 3 are separate so we say 9A4A this is why its important to split it up
//our goal to to take this input AAAAAAAAAAAAABBCCCCDD --> and get this output 9A4A2B4C2D

//time complexity 
//O(n)

//space complexity 
//O(n)

function runLengthEncoding(string) {
    const encodedStringCharacters = [];
    let currentRunLength = 1;

    for (let i = 1; i < string.length; i++) {
        const currentCharacter = string[i];
        const previousCharacter = string[i - 1];

        if (currentCharacter !== previousCharacter || currentRunLength === 9) {
            encodedStringCharacters.push(currentRunLength.toString());
            encodedStringCharacters.push(previousCharacter);
            currentRunLength = 0;
        }

        currentRunLength++;

    }

    encodedStringCharacters.push(currentRunLength.toString());
    encodedStringCharacters.push(string[string.length - 1]);

    return encodedStringCharacters.join('');


}