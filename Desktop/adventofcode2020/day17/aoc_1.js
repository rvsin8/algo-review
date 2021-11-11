--- Day 17: Conway Cubes ---
As your flight slowly drifts through the sky, the Elves at the Mythical Information Bureau at the North Pole contact you. They'd like some help debugging a malfunctioning experimental energy source aboard one of their super-secret imaging satellites.

The experimental energy source is based on cutting-edge technology: a set of Conway Cubes contained in a pocket dimension! When you hear it's having problems, you can't help but agree to take a look.

The pocket dimension contains an infinite 3-dimensional grid. At every integer 3-dimensional coordinate (x,y,z), there exists a single cube which is either active or inactive.

In the initial state of the pocket dimension, almost all cubes start inactive. The only exception to this is a small flat region of cubes (your puzzle input); the cubes in this region start in the specified active (#) or inactive (.) state.

The energy source then proceeds to boot up by executing six cycles.

Each cube only ever considers its neighbors: any of the 26 other cubes where any of their coordinates differ by at most 1. For example, given the cube at x=1,y=2,z=3, its neighbors include the cube at x=2,y=2,z=2, the cube at x=0,y=2,z=3, and so on.

During a cycle, all cubes simultaneously change their state according to the following rules:

If a cube is active and exactly 2 or 3 of its neighbors are also active, the cube remains active. Otherwise, the cube becomes inactive.
If a cube is inactive but exactly 3 of its neighbors are active, the cube becomes active. Otherwise, the cube remains inactive.
The engineers responsible for this experimental energy source would like you to simulate the pocket dimension and determine what the configuration of cubes should be at the end of the six-cycle boot process.

For example, consider the following initial state:

.#.
..#
###
Even though the pocket dimension is 3-dimensional, this initial state represents a small 2-dimensional slice of it. (In particular, this initial state defines a 3x3x1 region of the 3-dimensional space.)

Simulating a few cycles from this initial state produces the following configurations, where the result of each cycle is shown layer-by-layer at each given z coordinate (and the frame of view follows the active cells in each cycle):

Before any cycles:

z=0
.#.
..#
###


After 1 cycle:

z=-1
#..
..#
.#.

z=0
#.#
.##
.#.

z=1
#..
..#
.#.


After 2 cycles:

z=-2
.....
.....
..#..
.....
.....

z=-1
..#..
.#..#
....#
.#...
.....

z=0
##...
##...
#....
....#
.###.

z=1
..#..
.#..#
....#
.#...
.....

z=2
.....
.....
..#..
.....
.....


After 3 cycles:

z=-2
.......
.......
..##...
..###..
.......
.......
.......

z=-1
..#....
...#...
#......
.....##
.#...#.
..#.#..
...#...

z=0
...#...
.......
#......
.......
.....##
.##.#..
...#...

z=1
..#....
...#...
#......
.....##
.#...#.
..#.#..
...#...

z=2
.......
.......
..##...
..###..
.......
.......
.......
After the full six-cycle boot process completes, 112 cubes are left in the active state.

Starting with your given initial configuration, simulate six cycles. How many cubes are left in the active state after the sixth cycle?

Your puzzle answer was 232.


const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};
const solve = async () => {
  const lines = await readLines();
  let state = getActiveNodes(lines);
  
  for (let i = 0; i < 6; i += 1) {
    state = stepSimulation(state);
  }

  return state.size;
};

const getActiveNodes = (lines) => {
    const nodes = new Set(); //store info, the collection of coordinates //keep track of coordinates
    for (let x = 0; x < lines.length; x += 1) { //x will give me the vertical positions
        for (let y = 0; y < lines[0].length; y += 1) { //y will give me the horizontal positions
            const char = lines[x][y]; //symbol at this position, the char
            if (char === '#') { //if the char is active
                const node = getNodeFromArray([x, y, 0]); //z equals 0, we grabbing nodes
                nodes.add(node); //add that node to my set

            }
        }
    }
    return nodes; //return that set of nodes
};

const stepSimulation = (activeNodes) => { //rework this, you made a mistake in the original so undo 
  const newNodes = new Set();

  const activationCounts = {};

  for (let node of activeNodes) {
    const neighbors = getNeighbors(node);
    let activeNeighborCount = 0;
    
    for (let neighbor of neighbors) {
      if (activeNodes.has(neighbor)) {
        activeNeighborCount += 1
      } else {
        if (!(neighbor in activationCounts))
          activationCounts[neighbor] = 0;
        activationCounts[neighbor] += 1;
      }
    }

    if (activeNeighborCount === 2 || activeNeighborCount === 3)
      newNodes.add(node);
  }

  for (let potentialNode in activationCounts) {
    if (activationCounts[potentialNode] === 3)
      newNodes.add(potentialNode);
  }

  return newNodes;
}

const getNodeFromArray = (triplet) => { //3 coord of an array
    return triplet.join(',');

};

const getNeighbors = (node) => {
    const [x, y, z] = node.split(',').map(Number); //pluck out the original x y z
    const neighbors = new Set(); //keep it in a new set

    for (let deltaX = -1; deltaX <= 1; deltaX += 1){
        for (let deltaY = -1; deltaY <= 1; deltaY += 1){
            for (let deltaZ = -1; deltaZ <= 1; deltaZ += 1){
                const neighbor = getNodeFromArray([x + deltaX, y + deltaY, z + deltaZ]);
                neighbors.add(neighbor);
            }
        }


    }
    neighbors.delete(node);
    return neighbors;
};





solve().then(console.log); 

