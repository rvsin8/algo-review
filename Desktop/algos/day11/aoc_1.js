--- Day 11: Seating System ---
Your plane lands with plenty of time to spare. The final leg of your journey is a ferry that goes directly to the tropical island where you can finally start your vacation. As you reach the waiting area to board the ferry, you realize you're so early, nobody else has even arrived yet!

By modeling the process people use to choose (or abandon) their seat in the waiting area, you're pretty sure you can predict the best place to sit. You make a quick map of the seat layout (your puzzle input).

The seat layout fits neatly on a grid. Each position is either floor (.), an empty seat (L), or an occupied seat (#). For example, the initial seat layout might look like this:

L.LL.LL.LL
LLLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLLL
L.LLLLLL.L
L.LLLLL.LL
Now, you just need to model the people who will be arriving shortly. Fortunately, people are entirely predictable and always follow a simple set of rules. All decisions are based on the number of occupied seats adjacent to a given seat (one of the eight positions immediately up, down, left, right, or diagonal from the seat). The following rules are applied to every seat simultaneously:

If a seat is empty (L) and there are no occupied seats adjacent to it, the seat becomes occupied.
If a seat is occupied (#) and four or more seats adjacent to it are also occupied, the seat becomes empty.
Otherwise, the seat's state does not change.
Floor (.) never changes; seats don't move, and nobody sits on the floor.

After one round of these rules, every seat in the example layout becomes occupied:

#.##.##.##
#######.##
#.#.#..#..
####.##.##
#.##.##.##
#.#####.##
..#.#.....
##########
#.######.#
#.#####.##
After a second round, the seats with four or more occupied adjacent seats become empty again:

#.LL.L#.##
#LLLLLL.L#
L.L.L..L..
#LLL.LL.L#
#.LL.LL.LL
#.LLLL#.##
..L.L.....
#LLLLLLLL#
#.LLLLLL.L
#.#LLLL.##
This process continues for three more rounds:

#.##.L#.##
#L###LL.L#
L.#.#..#..
#L##.##.L#
#.##.LL.LL
#.###L#.##
..#.#.....
#L######L#
#.LL###L.L
#.#L###.##
#.#L.L#.##
#LLL#LL.L#
L.L.L..#..
#LLL.##.L#
#.LL.LL.LL
#.LL#L#.##
..L.L.....
#L#LLLL#L#
#.LLLLLL.L
#.#L#L#.##
#.#L.L#.##
#LLL#LL.L#
L.#.L..#..
#L##.##.L#
#.#L.LL.LL
#.#L#L#.##
..L.L.....
#L#L##L#L#
#.LLLLLL.L
#.#L#L#.##
At this point, something interesting happens: the chaos stabilizes and further applications of these rules cause no seats to change state! Once people stop moving around, you count 37 occupied seats.

Simulate your seating area by applying the seating rules repeatedly until no seats change state. How many seats end up occupied?

Your puzzle answer was 2273.

The first half of this puzzle is complete! It provides one gold star: *




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