--- Part Two ---
Time to check the rest of the slopes - you need to minimize the probability of a sudden arboreal stop, after all.

Determine the number of trees you would encounter if, for each of the following slopes, you start at the top-left corner and traverse the map all the way to the bottom:

Right 1, down 1.
Right 3, down 1. (This is the slope you already checked.)
Right 5, down 1.
Right 7, down 1.
Right 1, down 2.
In the above example, these slopes would find 2, 7, 3, 4, and 2 tree(s) respectively; multiplied together, these produce the answer 336.

What do you get if you multiply together the number of trees encountered on each of the listed slopes?

Your puzzle answer was 7812180000.

const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines();
    const moves = [ //coordinates of the moves we were given
        [1,1],
        [3,1],
        [5,1],
        [7,1],
        [1,2],

    ];
    let treeCount = 1; //count every tree, we multiply in the end so assign the count to 1

    for (let navigation of moves){  //iterate through each navigation
        const [right, down] = navigation; //define navigation
        treeCount *= numTrees(lines, right, down) //multiple the count
    }
    return treeCount; //return the count

};

const numTrees = (rows, rightMove, downMove) => {
    const width = rows[0].length; //to get the length of each line(since all the lengths are the same
    let colIndex = 0; //begin top left corner which will be the coordinates 0,0
    let numTrees = 0; //count trees
    for (let rowIndex = 0; rowIndex < rows.length; rowIndex+= downMove){ //iterate through the row, once you surpass it you have hit the bottom of your row
        if (rows[rowIndex][colIndex % width] === '#') {//current positions, you use module to get the length of any given line, # is a tree
        numTrees++; //iterate and add each count
        }
        colIndex += rightMove; //we want to the right move after each column


    }
    return numTrees //return the count
}

solve().then(console.log);