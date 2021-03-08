//Sunset Views
//Stacks

//my understandings 
//given an array of building heights and the direction of where these buildings are facing
//height goes according to idx position, east is right and west is left
//

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