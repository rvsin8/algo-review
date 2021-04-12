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