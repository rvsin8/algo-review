
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

