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

function generateDivTagsFromPrefix(openingTagsNeeded, closingTagsNeeded, prefix, result) {
    if (openingTagesNeeded > 0) {
        const newPrefix = prefix + '<div>';
        generateDivTagsFromPrefix(openingTagsNeeded - 1, closingTagsNeeded - 1, newPrefix, result);
    }

    if (openingTagsNeeded < closingTagsNeeded) {
        const newPrefix = prefix + '<div>';
        generateDivTagsFromPrefix(openingTagsNeeded, closingTagsNeeded - 1, newPrefix, result);
    }

    if (closingTagsNeeded === 0) result.push(prefix);

}