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
//

//time complexity
//O(n + m)

//space complexity 
//O(n)

function underscorfiySubstring(string, substring) {
    const locations = collapse(getLocations(strings, substring));
    return underscorify(string, locations);
}

function getLocations(string, substring) {
    const locations = [];
    let startIdx = 0;
    while (startIdx < string.length) {
        const nextIdx = string.indexOf(substring, startIdx);
        if (nextIdx !== -1) {
            locations.push([nextIdx, nextIdx + substring.length]);
            startIdx = nextIdx + 1;
        } else {
            break;
        }
    }
    return locations;
}

function collapse(locations) {
    if (!locations.length) return locations;
    const newLocations = [locations[0]];
    let previous = newLocations[0];
    for (let i = 1; i < locations.length; i++) {
        const current = locations[i];
        if (current[0] <= previous[1]) {
            previous[1] = current[1];
        } else {
            newLocations.push(current);
            previous = current;
        }
    }
    return newLocations;
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