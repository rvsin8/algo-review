//Underscorify Substring
//Strings

//my understanding 
//we are given a string and a substring and we must wrap the substring in the original string in underscore
//"testthis is a testtest to see if testesttest it works", "test --> "_test_this is a _testtest_ to see if _testesttest_ it works",
//getLocations to find the substring on our string
//collapseLocation get the location and collapse them
//underscorify will add the underscores to our substring
//traverse main string and each idx find ths substring
//if we cannot find the substring then we return --> locations [[0,4]]
//we move on to idx1 bc our substring may overlap and keep doing this until we find test again
//we find test again in idx "10" --< locations [[0,4], [10,14]]
//move on to idx 11 and keep going until idx14 --> locations [[0,4], [10,14], [14,18]]
//collapseLocations [[0,4], [10,14], [14,18]] we need to collapse the last two array so [10,18] is what we get bc we had 2 14's which is 2 same idx so we know to combine those arrays
//so on until we hit the underscorify where we will insert the underscores into our string
//underscorify --> [_,t,e,s,t,_ ... so on] then return our aray then concatonate it and we are done
//

//time complexity
//O(n + m) where n is the string and m is the substring

//space complexity 
//O(n) where n is the length of our input string

function underscorfiySubstring(string, substring) {
    const locations = collapse(getLocations(strings, substring)); //we get the locations from the string and substring and whatever our collapse location returns is our final locations
    return underscorify(string, locations); //answer
}

function getLocations(string, substring) {//helper method
    const locations = [];//locations array
    let startIdx = 0; //start at idx0
    while (startIdx < string.length) { //while we are still in the string
        const nextIdx = string.indexOf(substring, startIdx); //find an instance of the substring in the string 
        if (nextIdx !== -1) { //the substring has been found
            locations.push([nextIdx, nextIdx + substring.length]); //we append the array that has the nextidx and where it ends bc thats where we put the underscore
            startIdx = nextIdx + 1; //update the start idx
        } else {
            break; //or else we break bc the substring was not found
        }
    }
    return locations; //return the locations
}

function collapse(locations) { //helper function #2
    if (!locations.length) return locations; //if we dont have locations and its empty then return locations
    const newLocations = [locations[0]]; //hold the first subarray of locations
    let previous = newLocations[0]; //previous initializes to the first location in the subarray
    for (let i = 1; i < locations.length; i++) { //in range 
        const current = locations[i]; //
        if (current[0] <= previous[1]) { //if the starting idx is less than or equal to the previous idx, our current substring overlaps or sits next too
            previous[1] = current[1]; //we update the ending idx of the previous to be the ending of the current idx
        } else {
            newLocations.push(current); //append to new locations
            previous = current; //we set the previous to current
        }
    }
    return newLocations; //return new locations 
}

function underscorify(string, locations) {
    let locationsIdx = 0;
    let stringIdx = 0;
    let inBetweenUnderScores = false;
    const finalChars = [];
    let i = 0;
    while (stringIdx < string.length && locationsIdx < locations.length) {
        if (stringIdx === locations[locationsIdx][i]) {
            finalChars.push('_');
            inBetweenUnderScores = !inBetweenUnderScores;
            if (!inBetweenUnderScores) locationsIdx++;
            i = i === 1 ? 0 : 1;
        }
        finalChars.push(string[stringIdx]);
        stringIdx++;
    }
    if (locationsIdx < locations.length) {
        finalChars.push('_');
    } else if (stringIdx < string.length) {
        finalChars.push(string.slice(stringIdx));
    }
    return finalChars.join('');

}