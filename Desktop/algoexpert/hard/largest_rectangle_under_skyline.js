//Largest Rectangle Under Skyline
//Stacks 

//my understanding
//we are given one input called buildings and it will be an array of integers that represent the height of buildings adjacent from each other
//we have to look at the heights, we can assume they are the same width and we must find the largest area these adjacent buildings can form
//we need to pick buildings right besides each other
//

//time complexity 
//O(n)

//space complexity 
//O(n)

function largestRectangleUnderSkyline(buildings) {
    const pillarIndices = [];
    let maxArea = 0;

    const extendedBuildings = buildings.concat([0]);
    for (let idx = 0; idx < extendedBuildings.length; idx++) {
        const height = extendedBuildings[idx];
        while (pillarIndices.length !== 0 && extendedBuildings[pillarIndices[pillarIndices.length - 1]] >= height) {
            const pillarHeight = extendedBuildings[pillarIndices.pop()];
            const width = pillarIndices.length === 0 ? idx : idx - pillarIndices[pillarIndices.length - 1] - 1;
            maxArea = Math.max(width * pillarHeight, maxArea);
        }
        pillarIndices.push(idx);
    }
    return maxArea;

}