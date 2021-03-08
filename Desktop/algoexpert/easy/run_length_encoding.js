//Run-Length Encoding 
//Strings

//my understanding 
//lost list - when you can use to output to get back to the input and vice versa ?
//"13A" is confusing bc how do we know thr 1 and 3 are separate so we say 9A4A this is why its important to split it up
//our goal to to take this input AAAAAAAAAAAAABBCCCCDD --> and get this output 9A4A2B4C2D
//chars = [] we dont use a string bc it is immutable which means anything to change it will require an O(N)
//a list is mutable ^ so any change will be O(1) time
//length = 1, we start at 1 bc we take in a nonempty string so we will always have atleast a string of length 1
//we start at the second letter from there we can check the previous letter and see if we continue the run or make a new run
//
//

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