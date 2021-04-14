//Pattern Matcher
//Strings

//my understanding
//given two strings, first one is a patterns that consists of x's and y's --> "xxyxxy"
//second string is the main string "gogopowerrangergogopowerranger"
//does our main string match our pattern and what is the value of x and y
//answer is x = go and y = powerranger
//first thing we would do, is find how many instances of x or y appear in our pattern
//we generate a new pattern which will simplify our algorithm a lot
//we have to see if it starts with an x or a y
//to simplify our logic is to turn any pattern that starts with y and turn it to x
//getNewPattern will be a function that will create or return an array of our pattern, this is to check or do the switch
//getCountsandFirstYPos is a function is going to count the x's and y's and tell us where our first y is at after we iterate through our pattern in getNewPattern
//main function where we will do most logic
//lenofY will be the total string length - length of x and how many times they appear and divide it by 2 --> (30 - (1*4))/2
//firstYPos = 2, yIdx = firstYPos x lenofX --> 2 * 1 = 2
//x = "g" 
//y = "gopowerranger"
//we replace every x with g and every y with gopowerranger
//gggopowerrangergggopowerranger and this is not correct
//now we update lenofX to 2 and lenofY = (30 - 2 * 4) / 2 = 11
//yIdx = 2 * 2 = 4 this is where the y starts --> x = go and y = powerranger
//this is correct once we replace them in our pattern

//time complexity 
//O(n^2 + m)

//space complexity
//O(n + m)

function patternMatch(pattern, string) {
    if (pattern.length > string.length) return [];
    const newPattern = getNewPattern(pattern);
    const didSwitch = newPattern[0] !== pattern[0];
    const counts = {x: 0, y: 0};
    const firstYPos = getCountsAndFirstYPos(newPattern, counts);
    if (counts['y'] !== 0) {
        for (let lenOfX = 1; lenOfX < string.length; lenOfX++) {
            const lenOfY = (string.length - lenOfX * counts['x']) / counts['y'];
            if (lenOfY <= 0 || lenOfY % 1 !== 0) continue;
            const yIdx = firstYPos * lenOfX;
            const x = string.slice(0, lenOfX);
            const y = string.slice(yIdx, yIdx + lenOfY);
            const potentialMatch = newPattern.map(char => (char === 'x' ? x : y));
            if (string === potentialMatch.join('')) {

                return !didSwitch ? [x,y] : [y,x];
            }
        }
    } else {
        const lenOfX = string.length / counts['x'];
        if (lenOfX % 1 === 0) {
            const x = string.slice(0, lenOfX);
            const potentialMatch = newPattern.map(char => (char === 'x' ? x : y));
            if (string === potentialMatch.join('')) {
                return !didSwitch ? [x, ''] : ['', x];
            }
        }
    }
    return [];
}

function getNewPattern(pattern) {
    const patternLetters = pattern.split('');
    if (pattern[0] === 'x') {
        return patternLetters;
    } else {
        return patternLetters.map(char => (char === 'y' ? 'x' : 'y'));
    }
}

function getCountsAndFirstYPos(pattern, counts) {
    let firstYPos = null;
    for (let i = 0; i < pattern.length; i++) {
        const char = pattern[i];
        counts[char]++;
        if (char === 'y' && firstYPos === null) firstYPos = i;
    }
    return firstYPos;
}