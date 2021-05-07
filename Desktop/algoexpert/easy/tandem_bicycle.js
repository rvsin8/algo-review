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
//[9,7] = 9
//[6,5] = 6
//[5,3] = 5
//[3,2] = 3
//[2,1] = 2
//total speed of 25, this is the minimum possible speed we can have
//sorting will help 
//red = [2,3,5,5,9]
//blue = [1,2,3,6,7]
//we can easily find the largest and smallest arrays
//have two pointers to help pair up small wt large or large wt large 

//time complexity
//O(nlogn) bc we have quicksort 

//space complexity 
//O(1) we store nothing bc we use pointers

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
    redShirtSpeeds.sort((a,b) => a - b); //sort in ascending order
    blueShirtSpeeds.sort((a,b) => a - b); //sort in ascending order

    if (!fastest) reverseArrayInPlace(redShirtSpeeds); //if our boolean is not fastest aka false then we reverse the red shirt array

    let totalSpeed = 0; //manipulate this to find the total speed 
    for (let idx = 0; idx < redShirtSpeeds.length; idx++) { //loop
        const rider1 = redShirtsSpeeds[idx]; //in normal order
        const rider2 = blueShirtSpeeds[blueShirtSpeeds.length - idx - 1]; //ele in reverse order 
        totalSpeed += Math.max(rider1, rider2);//choose the max speed

    }
    return totalSpeed; //return answer
}

function reverseArrayInPlace(array) { //helper function that reverses an array
    let start = 0; //pointer start at idx 0
    let end = array.length - 1; //pointer at the array length - 1

    while (start < end) { //as long as the pointers do not overlap 
        const temp = array[start]; //swap two array values
        array[start] = array[end]; //swap two array values
        array[end] = temp; //swap two array values 
        start++; //increment one pointer
        end--; //increment the next pointer
    }
}