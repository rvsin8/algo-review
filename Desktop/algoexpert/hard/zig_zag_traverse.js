//Zig Zag Traverse
//Arrays

//my understanding 
//given a 2D array and we need to traverse it in a zig zag order
//this question is easier in face value than actual implementation 
//there are only two directions you are going in which is down or up maybe even right
//1-2 4-6 10-13 15-16 you are going down
//2-3 7-10 14-15 you are going up
//3-4 13-14 you are going to the right
//we always go down at the parameters 
//when we go 4-6 we know once we reach the first col we need to go down 
//if we are in the last row and we are still going down ? we should actually go right
//when we are in row 0 and we are going up then we go right
//if we are in the last col, we cannot go right so we go down

//my solution
//start at top left and we always go down as our first move
//keep track of direction 
//bc we are at col0 we go down to 2
//direction is now up to 3
//now we are at row0 bc that is where 3 is so we move right 4
//update direction to be going down
//4-5 we are not in the perimeter so we can keep going diag down to 6
//6 is at col0 so we go down to 7
//now direction goes up
//the 8 and 9 are not in perimeter 
//10 is in the first row and last col so we go down direction change to 11
//12 is not in the perimeter
//at 13 we are at the last row so we move right to 14 
//we change direction up to 15 
//15 is in the last col so we go down updating our direction to down to 16 our last num
//validate the final num so we know to be done
//the code will be majority if and statements 
//

//time complexity 
//O(n) where n is the total num of ele in the 2d array bc we are just traversing all elements once

//space complexity
//O(n) we have to store all the elements in an array like the question says - we don't need any extra space beyond that 

function zigzagTraverse(array) {
    const height = array.length - 1;//we are going to be checking multiple times if we are in the perimeters so we keep track of the height
    const width = array[0].length - 1; //we are going to be checking multiple times if we are in the perimeters we keep track of the width which is the length of the furst subarray - 1
    const result = [];//return for our answer
    let row = 0;//we start at 0
    let col = 0;//we start at 0
    let goingDown = true;//we always start going down
    while (!isOutOfBounds(row, col, height, width)) {//aslong as we are inside the 2d array we can keep traversing
        result.push(array[row][col]);//bc we are inbounds we will push current value to our results array at row and col
        if (goingDown) { //if we are going down
            if (col === 0 || row === height) { //first col and the bottom row we need to change direction
                goingDown = false; //we are going up
                if (row === height) { //if we are at the very bottom, we wont go further down 
                    col++; //we will go right
                } else {
                    row++; //we keep going down 
                }
            } else { //if we are not in the first row or last col 
                row++; //we just keep on going diag down
                col--; //diag down
            }
        } else { //handle reverse case - when we go up
            if (row === 0 || col === width) { //top row or last col
                goingDown = true; //now we are going down
                if (col === width) { //are we in the final col
                    row++; //lets go down
                } else {
                col++; //otherwise we are in the first row and we just want to go right
            }
        } else {
            row--;//go diag up
            col++;// go diag up
        }
    }
}
    return result;//answer
}

function isOutOfBounds(row, col, height, width) { //helper O(1) function cause all we are doing is checking 
    return row < 0 || row > height || col < 0 || col > width; //we are too high up; too far down; too far left or too far right
}