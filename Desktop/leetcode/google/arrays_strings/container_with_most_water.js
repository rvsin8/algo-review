//Given n non-negative integers a1, a2, ..., an , where each represents a point at coordinate (i, ai). n vertical lines are drawn such that the two endpoints of the line i is at (i, ai) and (i, 0). Find two lines, which, together with the x-axis forms a container, such that the container contains the most water.
//
//Notice that you may not slant the container.
//
//Hint 1
//The aim is to maximize the area formed between the vertical lines. The area of any container is calculated using the shorter line as length and the distance between the lines as the width of the rectangle.
//Area = length of shorter vertical line * distance between lines
//We can definitely get the maximum width container as the outermost lines have the maximum distance between them. However, this container might not be the maximum in size as one of the vertical lines of this container could be really short
//
//
//Hint 2 
//Start with the maximum width container and go to a shorter width container if there is a vertical line longer than the current containers shorter line. This way we are compromising on the width but we are looking forward to a longer length container.

//the input is going to be an array of numbers and each index the number represents the height of each wall
//the goal is to return the container with the most water - the heigh of the red wall is 7 and the width is 7 the area is then 7 * 7 = 49
//we need to use ratcheting to solve this problem --> a pointer at the first index and end index, at each stage we are either going decrement the ending pointer or increase the starting pointer
//we want to keep track of the height, width and area of the current container
//at the end of the algorithm we will return the maximum area we have seen
//we always want to keep the higher height of thw two walls bc that will give us our highest max area, from there we decide what to increment or decrement
//when we have the same height how do we know which one we need to decrement ? it does not really matter. *check out explanation*

//first iteration: height is 1, width is 8, area us 8
//second iteration: height is 7, width is 7, area 49
//third iteration:  height is 3, width is 6, area is 18
//fourth iteration: height is 8, width is 5, area is 40
//fifth iteration: height is 4, width is 4, area is 16
//sixth iteration: height is 5, width is 3, area is 15
//seventh iteration: height is 2, width is 2, area is 4
//eighth iteration: height is 6, width is 1, area is 6
//time complexity is O(n), because we are ratcheting from the end to the start until those two points meet and once they meet we are done, they only run once and we are using only the input array and no extra space


function maxArea(a){


}

