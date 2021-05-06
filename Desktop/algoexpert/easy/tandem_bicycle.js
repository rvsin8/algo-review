//Tandem Bicycle 
//Greedy Algorithm 

//my understandings

//time complexity

//space complexity 

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a,b) => a - b);
    blueShirtSpeeds.sort((a,b) => a - b);

    if (!fastest) reverseArrayInPlace(redShirtSpeeds);
}