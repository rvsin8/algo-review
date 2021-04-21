//Largest Rectangle Under Skyline
//Stacks 

//my understanding
//we are given one input called buildings and it will be an array of integers that represent the height of buildings adjacent from each other
//we have to look at the heights, we can assume they are the same width and we must find the largest area these adjacent buildings can form
//we need to pick buildings right besides each other
//buildings = [1, 3, 3, 2, 4, 1, 5, 3, 2]
//if we look at the first three buildings the area we can get will be 1 bc thats the minimum value of height btw the three buildings
//if we look at building 2 and 3 we would get an area of 6 bc the two buildings height is 6
//for building 2-5 we would get an area of 8 bc the lowest height is 2 and we have 4 buildings 
//the answer is 9 by using all of the buildings the min height is 1 and we have 9 buildings so 1 * 9 = 9
//if you have no buildings the largest rectangle is 0

//non optimal solution 
//two main factors that are influencing the area - the width and height
//if we are given two large buildings we would probably use those two buildings
//we need to find all rectangle combos 
//loop through every building and figure out the height of the buildings and see what is the largest rectangle we can create
//we expand to the left or right 
//wt idx0 we have a height is 1, the farthest left we can go is the height itself and to the right it is all the way to the last building which is 9
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