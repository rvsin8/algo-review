//General Div Tags
//Recursion

//my understanding 

//time complexity 
//O(2n)!/((n!(n+1)))

//space complexity 
//O(2n)!/((n!(n+1)))s


function generateDivTags(numberOfTags) {
    const matchedDivTags = [];
    generateDivTagsFromPrefix(numberOfTags, numberOfTags, '', matchedDivTags);
    return matchedDivTags;
}