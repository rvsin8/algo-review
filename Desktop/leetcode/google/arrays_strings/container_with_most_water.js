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

public int maxArea(int[] heights) {
    if(heights.length < 2){
         return 0;
    }
    int maxArea = 0;
    for (int i = 0; i < heights.length; i++) {
        for (int j = i + 1; j < heights.length; j++) {
            int height = heights[i];
            int width = j - i;
            if(height > heights[j]){
                height = heights[j];
            }
            int area = height * width;
            if (area > maxArea) {
                maxArea = area;
            }

        }
    }
    return maxArea;
}