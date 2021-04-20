//Largest Rectangle Under Skyline
//Stacks 

//my understanding

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