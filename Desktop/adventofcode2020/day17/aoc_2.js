--- Part Two ---
For some reason, your simulated results don't match what the experimental energy source engineers expected. Apparently, the pocket dimension actually has four spatial dimensions, not three.

The pocket dimension contains an infinite 4-dimensional grid. At every integer 4-dimensional coordinate (x,y,z,w), there exists a single cube (really, a hypercube) which is still either active or inactive.

Each cube only ever considers its neighbors: any of the 80 other cubes where any of their coordinates differ by at most 1. For example, given the cube at x=1,y=2,z=3,w=4, its neighbors include the cube at x=2,y=2,z=3,w=3, the cube at x=0,y=2,z=3,w=4, and so on.

The initial state of the pocket dimension still consists of a small flat region of cubes. Furthermore, the same rules for cycle updating still apply: during each cycle, consider the number of active neighbors of each cube.

For example, consider the same initial state as in the example above. Even though the pocket dimension is 4-dimensional, this initial state represents a small 2-dimensional slice of it. (In particular, this initial state defines a 3x3x1x1 region of the 4-dimensional space.)

Simulating a few cycles from this initial state produces the following configurations, where the result of each cycle is shown layer-by-layer at each given z and w coordinate:

Before any cycles:

z=0, w=0
.#.
..#
###


After 1 cycle:

z=-1, w=-1
#..
..#
.#.

z=0, w=-1
#..
..#
.#.

z=1, w=-1
#..
..#
.#.

z=-1, w=0
#..
..#
.#.

z=0, w=0
#.#
.##
.#.

z=1, w=0
#..
..#
.#.

z=-1, w=1
#..
..#
.#.

z=0, w=1
#..
..#
.#.

z=1, w=1
#..
..#
.#.


After 2 cycles:

z=-2, w=-2
.....
.....
..#..
.....
.....

z=-1, w=-2
.....
.....
.....
.....
.....

z=0, w=-2
###..
##.##
#...#
.#..#
.###.

z=1, w=-2
.....
.....
.....
.....
.....

z=2, w=-2
.....
.....
..#..
.....
.....

z=-2, w=-1
.....
.....
.....
.....
.....

z=-1, w=-1
.....
.....
.....
.....
.....

z=0, w=-1
.....
.....
.....
.....
.....

z=1, w=-1
.....
.....
.....
.....
.....

z=2, w=-1
.....
.....
.....
.....
.....

z=-2, w=0
###..
##.##
#...#
.#..#
.###.

z=-1, w=0
.....
.....
.....
.....
.....

z=0, w=0
.....
.....
.....
.....
.....

z=1, w=0
.....
.....
.....
.....
.....

z=2, w=0
###..
##.##
#...#
.#..#
.###.

z=-2, w=1
.....
.....
.....
.....
.....

z=-1, w=1
.....
.....
.....
.....
.....

z=0, w=1
.....
.....
.....
.....
.....

z=1, w=1
.....
.....
.....
.....
.....

z=2, w=1
.....
.....
.....
.....
.....

z=-2, w=2
.....
.....
..#..
.....
.....

z=-1, w=2
.....
.....
.....
.....
.....

z=0, w=2
###..
##.##
#...#
.#..#
.###.

z=1, w=2
.....
.....
.....
.....
.....

z=2, w=2
.....
.....
..#..
.....
.....
After the full six-cycle boot process completes, 848 cubes are left in the active state.

Starting with your given initial configuration, simulate six cycles in a 4-dimensional space. How many cubes are left in the active state after the sixth cycle?

Your puzzle answer was 1620.

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
                const node = getNodeFromArray([x, y, 0, 0]); //z equals 0, we grabbing nodes
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

const getNodeFromArray = (quad) => { //3 coord of an array
    return quad.join(',');

};

const getNeighbors = (node) => {
    const [x, y, z, w] = node.split(',').map(Number); //pluck out the original x y z
    const neighbors = new Set(); //keep it in a new set

    for (let deltaX = -1; deltaX <= 1; deltaX += 1){
        for (let deltaY = -1; deltaY <= 1; deltaY += 1){
            for (let deltaZ = -1; deltaZ <= 1; deltaZ += 1){
                for (let deltaW = -1; deltaW <= 1; deltaW += 1){
                    const neighbor = getNodeFromArray([x + deltaX, y + deltaY, z + deltaZ, w + deltaW]);
                    neighbors.add(neighbor);
                }
            }
        }


    }
    neighbors.delete(node);
    return neighbors;
};





solve().then(console.log); 
