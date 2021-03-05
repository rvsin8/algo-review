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
//

//time complexity 
//O(n)

//space complexity
//O(n)

function zigzagTraverse(array) {
    const height = array.length - 1;
    const width = array[0].length - 1;
    const result = [];
    let row = 0;
    let col = 0;
    let goingDown = true;
    while (!isOutOfBounds(row, col, height, width)) {
        result.push(array[row][col]);
        if (goingDown) {
            if (col === 0 || row === height) {
                goingDown = false;
                if (row === height) {
                    col++;
                } else {
                    row++;
                }
            } else {
                row++;
                col--;
            }
        } else {
            if (row === 0 || col === width) {
                goingDown = true;
                if (col === width) {
                    row++;
                } else {
                col++;
            }
        } else {
            row--;
            col++;
        }
    }
}
    return result;
}

function isOutOfBounds(row, col, height, width) {
    return row < 0 || row > height || col < 0 || col > width;
}