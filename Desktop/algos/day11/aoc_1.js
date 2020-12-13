const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const grid = lines.map(line =>[".",...line.split(''), "."]); //in the long run we want to mutate data so we want the inner elements to be turned into an array via split so we can mutate it and we put a border around it
    const floorRow = Array(grid[0].length).fill('.'); //grid[0] gives us the width of the grid and fill it up with '.'
    let borderedGrid = [ floorRow, ...grid, floorRow ] //maps a bordered grid
    

    let currentGrid = borderedGrid;
    let isStable = false; //begin variable as false
    while(!isStable){ //not false means true, once it is false  it will exit the while loop, recheck the logic its confusing
        const { newGrid, stable } = nextGeneration(currentGrid);
        currentGrid = newGrid;
        isStable = stable;
    }
    return charCount(currentGrid, '#');

}; 

const charCount = (grid, char) => {
    let count = 0
    for (let i = 1; i < grid.length - 1; i += 1){ //iterating through every true position of the original grid, not border so we start at 1
        for (let j = 1; j < grid[0].length - 1; j += 1) {  //the first iteration in this nested loop we'll look at position 1,1
            if (grid[i][j] === char) //if position is my char 
            count += 1;
        }
    }
    return count
};

const copy2D = (grid) => { //copy a 2D array into a new array
    return grid.map(row => [ ...row ]);

};


const nextGeneration = (grid) => { //take in a grid and give us back a new grid array
    const newGrid = copy2D(grid);
    
    let isStable = true;

    for (let i = 1; i < grid.length - 1; i += 1){ //iterating through every true position of the original grid, not border so we start at 1
        for (let j = 1; j < grid[0].length - 1; j += 1) {  //the first iteration in this nested loop we'll look at position 1,1
            const center = grid[i][j]; //to get our position and consider its neighbors
            const occupiedNeighbors = [ //filled with booleans

            grid[i - 1][j] === '#', //left
            grid[i + 1][j] === '#', //right
            grid[i][j - 1] === '#',
            grid[i][j + 1] === '#',
            grid[i - 1][j + 1] === '#', //diag down right
            grid[i + 1][j + 1] === '#',
            grid[i - 1][j - 1] === '#', 
            grid[i + 1][j - 1] === '#',
        ];

       let numOccupied = 0; //set it to 0
        for (let val of occupiedNeighbors){ //iterate through every ele in this boolean
            if (val === true) //if the value is true then
                numOccupied += 1; //increment count
        }

        if (center === 'L' && numOccupied === 0){ //if my center is free & the num occupied it is 0 then we can occupy the seat
            newGrid[i][j] = '#';
            isStable = false;

        } else if (center === '#' && numOccupied >= 4) { //if it is occupied  & the num occupied is greater than or equal to 4
            newGrid[i][j] = 'L'; //
            isStable = false;
        }
        };
    };
    return {newGrid, stable: isStable};
};

solve().then(console.log);