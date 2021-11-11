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
//O(n) we are creating our list, we have a for loop and n is the length od the string and in the for loop we are performing constant time operations O(n)

//space complexity 
//O(n) we have a list and we are adding PAIRS to it 

function runLengthEncoding(string) {
    const encodedStringCharacters = []; //returning this as output
    let currentRunLength = 1; //keep track of current run length

    for (let i = 1; i < string.length; i++) { //iterate
        const currentCharacter = string[i]; //track current char
        const previousCharacter = string[i - 1]; //track previous char

        if (currentCharacter !== previousCharacter || currentRunLength === 9) { //if the run length surpasses 9 and the current and previous length are diff
            encodedStringCharacters.push(currentRunLength.toString()); //push the length to the array
            encodedStringCharacters.push(previousCharacter); //push the char to the array
            currentRunLength = 0; //reset run length
        }

        currentRunLength++;//if not then keep incrementing 

    }

    encodedStringCharacters.push(currentRunLength.toString()); //handle all of the runs for us
    encodedStringCharacters.push(string[string.length - 1]); //append the last char in our string

    return encodedStringCharacters.join(''); //join into a string and answer


}