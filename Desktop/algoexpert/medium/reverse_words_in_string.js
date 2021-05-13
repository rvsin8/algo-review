//Reverse Words In String 
//Strings 

//my understanding
//given a string and return the same string with all the words reverse 
//"AlgoExpert is the best!" --> "best! the is AlgoExpert"
//we want to keep the spaces the same in the reverse string
//we have four words, the ! is still apart of a word
//what defines a word here is any characters grouped together and not separated by white space
//you are not guaranteed to have any words in your string
//"     " is valid
//"   a" --> "a   "

//time complexity 
//O(n)

//space complexity 
//O(n)

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
    words.push(string.slice(startOfWord));

    reverseList(words);
    return words.join('');
}

function reverseList(list) {
    let start = 0,
        end = list.length - 1;
    while (start < end) {
        const temp = list[start];
        list[start] = list[end];
        list[end] = temp;
        start++;
        end--;
    }
}