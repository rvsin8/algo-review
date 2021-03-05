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