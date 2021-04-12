//Underscorify Substring
//Strings

//my understanding 

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
        const nextIdx = string.indexof(substring, startIdx);
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