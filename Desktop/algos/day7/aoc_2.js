const { count } = require('console');
const { read } = require('fs');

const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines(); //array of every line in the file - readLines
    const graph = {}; //nodes will be keys of this object
    for (let line of lines) { //iterate through each line 
        const { destination, sources } = parseLine(line); //get parse line for every line -- we will get back an object with a destination and an array of sources
        graph[destination] = sources; // will give us the # as a source

    }
    return traverse (graph, 'shiny gold bag') - 1; //to get off by 1 count
};


const traverse = (graph, node) => { //revisit this method
    let count = 1; //set count
    for (let neighbor in graph[node]){ //touch every node of the graph, neighbor is going to be "light lavender"
        const qty = graph[node][neighbor]; // what is the label on the edge that connects hte node to the neighbor
        count += qty * traverse(graph, neighbor); //finding the number of bags in my neighbor's subtree and multiplying it by the quantity that i have of the neighbor
    }
    return count; //return final quantity/answer
};



const parseLine = (line) => {
  const [ destination, rest ] = line.split('s contain ');
  if (rest.slice(0, 3) === 'no ') {
    return {
      destination,
      sources: {}
    };
  }

  const sourceSegments = rest.split(', ');
  const sources = {};
  for (let i = 0; i < sourceSegments.length; i += 1) {
    const segment = sourceSegments[i];
    const amount = Number(segment[0]);
    let source = amount === 1 ? segment.slice(2) : segment.slice(2, -1);
    
    if (i === sourceSegments.length - 1)
      source = source.slice(0, -1);

    sources[source] = amount;
  }

  return {
    destination,
    sources
  };
};


solve().then(console.log); // 101
