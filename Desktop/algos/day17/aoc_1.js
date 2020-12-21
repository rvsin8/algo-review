const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines();
    //console.log(lines);
    const initialnodes = getActiveNodes(lines);
    console.log(initialnodes)

    
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

const getNodeFromArray = (array) => { //3 coord of an array
    return array.join(',');

};

console.log(getNodeFromArray([3, 10, 2]));

solve().then(console.log); 

