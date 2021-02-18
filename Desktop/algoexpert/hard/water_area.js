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