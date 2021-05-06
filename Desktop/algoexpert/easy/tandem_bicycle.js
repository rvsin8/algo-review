//Tandem Bicycle 
//Greedy Algorithm 

//my understandings
//we are given three inputs
//the first input is a red shirt speeds that is an arryay with integers representing the speed of riders wearing red shirt
//blue shirt speed is the second input and equals the lenght of riders wearing red shirts
//last input is fastest which is a boolean that is true or false
//each tandem bike must have a rider that is wearing a blue shirt and one wearing red shirt
//you take the max speed of rider a or b, so if a = 3 and b = 4 the max is 4
//is fastest = true, we want the fastest speed and if it equals false then we want the slowest speed
//red = [1,3]
//blue = [2,3]
//max speed would be 5, 2 + 3
//redShirtSpeeds = [5,5,3,9,2]
//blueShirtSpeeds = [3,6,7,2,1]
//[9,7] = 9 we should not pair two large numbers maybe the minimu n umber from the other shirt speed
//[9,1] = 9, this is better
//[2,7] = 7
//[3,6] = 6
//[5,2] = 5
//[5,3] = 5
//add all the sums, 32 this works for fastest speed
//how about minimum speed ?
//we would want to pair the large values together for this 
//

//time complexity

//space complexity 

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a,b) => a - b);
    blueShirtSpeeds.sort((a,b) => a - b);

    if (!fastest) reverseArrayInPlace(redShirtSpeeds);

    let totalSpeed = 0;
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) {
        const rider1 = redShirtsSpeeds[idx];
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1];
        totalSpeed += Math.max(rider1, rider2);

    }
    return totalSpeed;
}

function reverseArrayInPlace(array) {
    let start = 0;
    let end = array.length - 1;

    while (start < end) {
        const temp = array[start];
        array[start] = array[end];
        array[end] = temp;
        start++;
        end--;
    }
}