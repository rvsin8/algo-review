--- Part Two ---
As soon as people start to arrive, you realize your mistake. People don't just care about adjacent seats - they care about the first seat they can see in each of those eight directions!

Now, instead of considering just the eight immediately adjacent seats, consider the first seat in each of those eight directions. For example, the empty seat below would see eight occupied seats:

.......#.
...#.....
.#.......
.........
..#L....#
....#....
.........
#........
...#.....
The leftmost empty seat below would only see one empty seat, but cannot see any of the occupied ones:

.............
.L.L.#.#.#.#.
.............
The empty seat below would see no occupied seats:

.##.##.
#.#.#.#
##...##
...L...
##...##
#.#.#.#
.##.##.
Also, people seem to be more tolerant than you expected: it now takes five or more visible occupied seats for an occupied seat to become empty (rather than four or more from the previous rules). The other rules still apply: empty seats that see no occupied seats become occupied, seats matching no rule don't change, and floor never changes.

Given the same starting layout as above, these new rules cause the seating area to shift around as follows:

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
#.LL.LL.L#
#LLLLLL.LL
L.L.L..L..
LLLL.LL.LL
L.LL.LL.LL
L.LLLLL.LL
..L.L.....
LLLLLLLLL#
#.LLLLLL.L
#.LLLLL.L#
#.L#.##.L#
#L#####.LL
L.#.#..#..
##L#.##.##
#.##.#L.##
#.#####.#L
..#.#.....
LLL####LL#
#.L#####.L
#.L####.L#
#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##LL.LL.L#
L.LL.LL.L#
#.LLLLL.LL
..L.L.....
LLLLLLLLL#
#.LLLLL#.L
#.L#LL#.L#
#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##L#.#L.L#
L.L#.#L.L#
#.L####.LL
..#.#.....
LLL###LLL#
#.LLLLL#.L
#.L#LL#.L#
#.L#.L#.L#
#LLLLLL.LL
L.L.L..#..
##L#.#L.L#
L.L#.LL.L#
#.LLLL#.LL
..#.L.....
LLL###LLL#
#.LLLLL#.L
#.L#LL#.L#
Again, at this point, people stop shifting around and the seating area reaches equilibrium. Once this occurs, you count 26 occupied seats.

Given the new visibility method and the rule change for occupied seats becoming empty, once equilibrium is reached, how many seats end up occupied?

Your puzzle answer was 2064.

const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
  const lines = await readLines();
  let borderedGrid = lines.map(line => ['.', ...line.split(''), '.']);
  const floorRow = Array(borderedGrid[0].length).fill('.');
  let grid = [floorRow, ...borderedGrid, floorRow];

  let stable = false;
  while (!stable) {
    const { newGrid, isStable } = simulateRound(grid);
    grid = newGrid
    stable = isStable;
  };
  return charCount(grid, '#');
};

const copyGrid = (grid) => {
  return grid.map(row => [...row]);
};

const charCount = (grid, char) => {
  let count = 0;
  for (let row = 0; row < grid.length; row += 1) {
    for (let col = 0; col < grid[0].length; col += 1) {
      if (grid[row][col] === char)
        count += 1;
    }
  }
  return count;
};

const grid1 = [
  [1,  2,  3,  4,  5,  6],
  [7,  8,  9,  10, 11, 12],
  [13, 14, 15, 16, 17, 18],
  [19, 20, 21, 22, 23, 24],
  [25, 26, 27, 28, 28, 30],
  [31, 32, 33, 34, 35, 36],
];

const getX = (grid, row, col) => { //x-xis meaning im going across
  return [ 
    grid[row].slice(0, col).reverse(), //we want the close element so 14 before 13
    grid[row].slice(col + 1) //that can be in order
  ];
};

//console.log(getX(grid1, 2, 2)); //[ [ 14, 13 ], [ 16, 17, 18 ] ]

const getY = (grid, row, col) => { //y-axis im going down
  const aboveAxis = [];
  for (let i = row - 1; i >= 0; i -= 1)
    aboveAxis.push(grid[i][col]);
  
  const belowAxis = [];
  for (let i = row + 1; i < grid.length; i += 1)
    belowAxis.push(grid[i][col]);

  return [
    aboveAxis,
    belowAxis
  ]
};
//console.table(grid1);
//console.log(getY(grid1, 2, 2)); //[ [ 9, 3 ], [ 21, 27, 33 ] ]


const getZ = (grid, row, col) => { //diag from top left to bottom right, this is tough
  const leftAxis = [];
  for (let i = 1; row - i >= 0 && col - i >= 0; i += 1)
    leftAxis.push(grid[row - i][col - i]);

  const rightAxis = [];
  for (let i = 1; row + i < grid.length && col + i < grid[0].length; i += 1)
    rightAxis.push(grid[row + i][col + i]);
  
  return [
    leftAxis,
    rightAxis
  ];
};

// console.table(grid1); [ [ 8, 1 ], [ 22, 28, 36 ] ]
console.log(getZ(grid1, 2, 2));

const getW = (grid, row, col) => { //top right to bottom left, this is tough to do
  const leftAxis = [];
  for (let i = 1; row + i < grid.length && col - i >= 0; i += 1)
    leftAxis.push(grid[row + i][col - i]);

  const rightAxis = [];
    for (let i = 1; row - i >= 0 && col + i < grid[0].length; i += 1)
      rightAxis.push(grid[row - i][col + i]);
  
  return [
    leftAxis,
    rightAxis
  ];
};


const nearestNeighbors = (grid, row, col) => { //helper
  const neighbors = []; //get an array

  [getX, getY, getZ, getW].forEach(getAxis => { //iterate through all the functions
    const [ sideA, sideB ] = getAxis(grid, row, col); //you get both arrays back
    for (let spot of sideA) {      
      if (spot !== '.') { //if not a dot
        neighbors.push(spot); //it is a chair and push it into the array
        break;
      }
    }

    for (let spot of sideB) {      
      if (spot !== '.') {
        neighbors.push(spot);
        break;
      }
    }
  });

  return neighbors;
};

const simulateRound = (grid) => {
  const newGrid = copyGrid(grid);

  let isStable = true;

  for (let row = 1; row < grid.length - 1; row += 1) {
    for (let col = 1; col < grid[0].length - 1; col += 1) {
      const center = grid[row][col];

      const neighbors = nearestNeighbors(grid, row, col);

      let numOccupied = 0;

      for (let neighbor of neighbors) {
        if (neighbor === '#')
          numOccupied += 1;
      }
      
      if (center === 'L' && numOccupied === 0) {
        newGrid[row][col] = '#';
        isStable = false;
      }

      if (center === '#' && numOccupied >= 5) { //now its 5 from 4
        newGrid[row][col] = 'L';
        isStable = false;
      }
    }
  }
  return {
    newGrid,
    isStable,
  };
};

solve().then(console.log); // 2068