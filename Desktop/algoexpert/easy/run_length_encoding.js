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
//if string[i] == string[i-1] we can do length += 1 else add run to chars
//once we hit the 9th A we reset the length --> [9,A]
//then we hit B so we add the last 4 As --> [9,A,4,A]
//once we hit C the length is [9,A,4,A,2,B]
//[9,A,4,A,2,B,4,C]
//after our for loop we have to automatically add whatever our run counter is 
//we have to turn the character list to a string
//if we have a situation where we have one character, we wont get to loop so we will just append the length and the last eel which is A to the list

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