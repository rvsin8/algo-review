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
//O(n^2 + m) where n is the length of our input string and m is the length of the pattern bc the main function we iterating through the entire main string and at each point we are generating strings x and y, we are transforming our getnewpattern and we are comparing it

//space complexity
//O(n + m) where n is the length of our input string and m is the length of the pattern, when we replace all the x and y thus generating a string

function patternMatch(pattern, string) {
    if (pattern.length > string.length) return []; //if the pattern is longer than the string we return an empty array this is an edge case
    const newPattern = getNewPattern(pattern); //generate a new pattern
    const didSwitch = newPattern[0] !== pattern[0]; //if the first letter is not equal to the first letter in pattern that means we did do that swap
    const counts = {x: 0, y: 0}; //initialize the count to 0
    const firstYPos = getCountsAndFirstYPos(newPattern, counts); //the first y position is equal to our helper will return a num that will return the idx of our first y position 
    if (counts['y'] !== 0) { //if the count of y is not equal to 0 and we have y's in the pattern
        for (let lenOfX = 1; lenOfX < string.length; lenOfX++) { //range, iterate through our entire main string 
            const lenOfY = (string.length - lenOfX * counts['x']) / counts['y']; //formula to figure out the length of y
            if (lenOfY <= 0 || lenOfY % 1 !== 0) continue; //if our y has a negative length or a decimal num there is not point of continuing 
            const yIdx = firstYPos * lenOfX; //the first y pos at idx
            const x = string.slice(0, lenOfX); //slice from the beginning to len of x //potential substring x
            const y = string.slice(yIdx, yIdx + lenOfY); //slice yidx until yidx + i //for potential y substring
            const potentialMatch = newPattern.map(char => (char === 'x' ? x : y)); //map the new pattern for every char, mao accordingly via replacing x and y
            if (string === potentialMatch.join('')) { //if our main string is equal to the potential match then 

                return !didSwitch ? [x,y] : [y,x]; //return our match if we did not switch else y,x
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

function getNewPattern(pattern) { //helper method
    const patternLetters = pattern.split(''); //split our patterns individually into a list
    if (pattern[0] === 'x') { //if the first idx is x
        return patternLetters; //then return them as they are
    } else { //if x is not the first ele
        return patternLetters.map(char => (char === 'y' ? 'x' : 'y')); //then swap x and y
    }
}

function getCountsAndFirstYPos(pattern, counts) { //helper method
    let firstYPos = null; //first y position is equal to none
    for (let i = 0; i < pattern.length; i++) { //in range
        const char = pattern[i];
        counts[char]++;
        if (char === 'y' && firstYPos === null) firstYPos = i; //if we still dont have a y then update it to i
    }
    return firstYPos; //return first y position
}