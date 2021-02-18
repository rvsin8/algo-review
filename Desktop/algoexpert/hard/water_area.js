//Water Area
//Dynamic Programming 

//my understanding
//given a drawing wt an example
//[0,8,0,5,0,0,10,0,0,1,1,0,3] --> 48
//each integer represents the height of a pillar

//solution
//we need to calculate for each idx how much water will be available above that idx
//first idx there is no pillar so no water will be trapped - it will spills over
//second idx is 8
//idx3 has pillars to the right of it being 5,10,1,1 and 3
//whether an idx has a zero or positive integer we need to see what is the tallest pillar to the right and left of that idx that is where the water will be trapped
//what is the min height of the pillars to the right and to the left of the idx
//so btw pillars wt height 8 and height 10 and the minimum height it 8
//what is the height of our current idx (idx3) is 0 so water will stored at the height of 8
//idx5 has a height 5 and 8 - 5 will store height 3 of water
//have a new array and in that array at each idx store tallest pillar to the left of the idx
//idx0 tallest height to the left is 0
//idx1 is 0
//idx2 is 8
//idx3 is 8
//idx4 is 8
//so on til we hit idx8 and it is then height 10 and then so on as well
//make an another array with the tallest height to the right
//going backwards it is 0,3,3,3,3,3,3,10,10,10,10,10,10,10
//build a third array - what is the smallest between these two pillars - take the smallest one and see if the current pillar or idx we are at has room for water above it
//minHeight is the min value between the leftmax and rightmax 
//if our current height is less than minimum height then w is equal to minHeight - height //else w = 0
//final area with the formula --> [0,0,8,8,3,8,8,0,3,3,2,2,3,0] this is a O(n) space complexity 

//time complexity 
//O(n) n is the length of our input array

//space complexity 
//O(1) is the more optimal solution

function waterArea(heights) {
    const maxes = new Array(heights.length).fill(0); //initialize this array
    let leftMax = 0; //first left max is 0 bc there is nothing to the left of it
    for (let i = 0; i < heights.length; i++) { //range
        const height = heights[i]; //we can declare our height to be the height at the idx we are at
        maxes[i] = leftMax; //we are storing the left max in the maxes array
        leftMax = Math.max(leftMax, height); //the left max is equal to the max of the leftmax or the current height we are at
    }
    let rightMax = 0;//initialize our first right max to 0
    for (let i = heights.length - 1; i >= 0; i--) { //reverse range
        const height = heights[i]; //we can declare our height to be the height at the idx we are at
        const minHeight = Math.min(rightMax, maxes[i]);//min height is the minimum of right max or maxes of i
        if (height < minHeight) { //ig height is < min height 
            maxes[i] = minHeight - height; //then maxes of i is equal to this difference via our formula 
        } else {
            maxes[i] = 0; //if not it is 0
        }
        rightMax = Math.max(rightMax, height);
        
    }
    return maxes.reduce((a,b) => a + b, 0); //
}




//more optimal solution with space complexity O(1)
function waterArea(heights) {
    if (heights.length === 0) return 0;

    let leftIdx = 0;
    let rightIdx = heights.length - 1;
    let leftMax = heights[leftIdx];
    let rightMax = heights[rightIdx];
    let surfaceArea = 0;

    while (leftIdx < rightIdx) {
        if (heights[leftIdx] < heights[rightIdx]) {
            leftIdx++;
            leftMax = Math.max(leftMax, heights[leftIdx]);
            surfaceArea += leftMax - heights[leftIdx];
        } else {
            rightIdx--;
            rightMax = Math.max(rightMax, heights[rightIdx]);
            surfaceArea += rightMax - heights[rightIdx];
        }
    }
    return surfaceArea;
}