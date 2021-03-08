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

//time complexity 
//O(n)

//space complexity 
//O(n)

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