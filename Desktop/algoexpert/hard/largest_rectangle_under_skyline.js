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
//maxArea = 9 
//at idx1 height is 3, the left is 1 and right is 3 and the maxArea = 6
//idx2, maxArea is 6 again
//idx3, the farthest left we can go is idx1 and right until idx 4, maxArea = 8 bc 2 * 4 = 8
//so on
//when we hit a building that is less than our height we stop at the idx before that height
//so on
//time complexity is O(n^2) with every building we have to look all the way to the left and right
//space complexity is O(1) we are storing nothing

//optimal solution
//will solve this with one pass
//we will find the left and right bound in a different way
//we are using a stack 
//it is LIFO and FILO
//we will use the stack to save indices, go through each building and help us determine our furthest left and right points
//we will compare the height of the buildings on top of the stack with our current building'
//we remove buildings from the stack once we find our bounds
//this is mad confusing rewatch this 
//R-L-1 then multiply it by our height 

//time complexity 
//O(n) bc we do one iteration n times --> n pop and n push

//space complexity 
//O(n) because we have a stack holding n buildings 

function largestRectangleUnderSkyline(buildings) {
    const pillarIndices = []; //saved to an empty list
    let maxArea = 0; //max area is 0

    const extendedBuildings = buildings.concat([0]); //numerate building with a height of 0
    for (let idx = 0; idx < extendedBuildings.length; idx++) { //in range
        const height = extendedBuildings[idx]; //
        while (pillarIndices.length !== 0 && extendedBuildings[pillarIndices[pillarIndices.length - 1]] >= height) { //if the ele in the top of the stack is greater than or equal to the height
            const pillarHeight = extendedBuildings[pillarIndices.pop()]; //pop this ele off the stack
            const width = pillarIndices.length === 0 ? idx : idx - pillarIndices[pillarIndices.length - 1] - 1; //itll be the last idx on the stack if theres nothing there otherwise we have to do the calculation
            maxArea = Math.max(width * pillarHeight, maxArea); //we will calculate and decide the max btw the two
        }
        pillarIndices.push(idx); //push into the list 
    }
    return maxArea; //return answer

}