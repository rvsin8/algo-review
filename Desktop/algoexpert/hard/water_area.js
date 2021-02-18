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
//have a new array and in that array at each idx store 

//time complexity 
//O(n) 

//space complexity 
//O(1)

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