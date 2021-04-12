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
            
        }
    }
}