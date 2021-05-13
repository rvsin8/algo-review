//Reverse Words In String 
//Strings 

//my understanding

//time complexity 

//space complexity 

function reverseWordsInString(string) {
    const words = [];
    let startOfWord = 0;
    for (let idx = 0; idx < string.length; idx++) {
        const character = string[idx];

        if (character === ' ') {
            words.push(string.slice(startOfWord, idx));
            startOfWord = idx;
        } else if (string[startOfWord] === ' ') {
            words.push(' ');
            startOfWord = idx;
        }
    }
}