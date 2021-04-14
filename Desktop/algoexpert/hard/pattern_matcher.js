//Pattern Matcher
//Strings

//my understanding

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
}