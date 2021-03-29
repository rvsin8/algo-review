//General Div Tags
//Recursion

//my understanding 
//we are going to get one input this input is going to represent how many div tags all our outputs strings must contain
//a div tag is an opening tag and closing tag
//so if numberoftags = 3, we need three opening and three closing tags
//we need match tags as well, with every opening tag we need a closing tag to come right after


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