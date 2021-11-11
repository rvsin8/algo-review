//Sunset Views
//Stacks

//my understandings 
//given an array of building heights and the direction of where these buildings are facing
//height goes according to idx position, east is right and west is left
//[3,5,4,4,3,1,3,2] --> [1,3,6,7]
//return answer in ascending order
//a building can see a sunset if it is there is no building same height or above it in the direction in which it is facing
//building0 cannot bc its blocked
//building1 can bc its the tallest
//building2 cannot it is blocked by same height
//building3 can bc it is now the tallest
//building4 and 5 are both blocked
//building5 can and 7 can 
//direction matters, keep this in mind bc if we did it in reverse the answer changes 

//solution
//loop from opposite direction the buildings  are facing
//create a variable called max height = the max height of the building we have already seen - bc if we can store the max height of a building in the direction we are facing
//if we are at building 3 with sz 4 and we know the max height on every building to the right is 3 we know building 3 can see the sunset
//example we are going east
//so we start at the last idx which is 7 and no building is to the right of 7 so we add it to our array --> [7] with the max height being 2
//now we go to idx6 and the building has a height of 3 so we now update the max height since its > 2 and we add this building to our array as well --> [6,7]
//building 5 and 4 all are below height 3 so we skip them
//building3 has a height of 4 so we add it to the array and update our max height --> [7,6,3]
//same for building one with a height 5 and we update and add as well --> [7,6,3,1]

//time complexity 
//O(n) 

//space complexity 
//O(n) n elements in this array

//there is another solution that deals with stacks check it out when you have time

function sunsetViews(buildings, direction) {
    const candidateBuildings = [];

    const startIdx = direction === "EAST" ? 0 : buildings.length - 1;
    const step = direction === "EAST" ? 1 : -1;

    let idx = startIdx;
    while (idx >= 0 && idx < buildings.length) {
        const buildingHeight = buildings[idx];

        while (candidateBuildings.length > 0 && buildings[candidateBuildings[candidateBuildings.length - 1]] <= buildingHeight)
        {
            candidateBuildings.pop();
        }

        candidateBuildings.push(idx);
        idx = idx + step; 
        
    }
    if (direction === "WEST") candidateBuildings.reverse();

    return candidateBuildings;
}


//this is the one you wrote your my understanding for 

function sunsetViews(buildings, direction) {
    const buildingWithSunsetViews = []; //the array we will return in the end with the buildings that can view the sunset

    const startIdx = direction === 'WEST' ? 0 : buildings.length - 1; //if the direction is west we start at idx 0 or else it is last if its east
    const step = direction === 'WEST' ? 1 : -1; //1 if it is equal to west if its east then -1

    let idx = startIdx; //where we start
    let runningMaxHeight = 0; //update whenever we find a bigger height 

    while (idx >= 0 && idx < buildings.length) { //iterate 
        const buildingHeight = buildings[idx]; //get the current height of the building
        
        if (buildingHeight > runningMaxHeight) buildingWithSunsetViews.push(idx); //if the building height is taller than the current max height we can add it to our final array

        runningMaxHeight = Math.max(runningMaxHeight, buildingHeight); //update the max if we can

        idx = idx + step; //increment whether its forward or backward depending on the fdirection 

    }

    if (direction === "EAST") buildingWithSunsetViews.reverse(); //reverse the output array if it is for the EAST direction
    return buildingWithSunsetViews; //the answer
}