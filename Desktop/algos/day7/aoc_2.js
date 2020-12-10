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
        if (!(destination in graph)) //the first time i see a node, i want to seee if its in the graph if not in the graph 
            graph[destination] = []; //we can add it to the graph

        for (let source of sources){ //iterate through all source nodes & key into them
            if (!(source in graph)) //if its not in there
                graph[source] = []; //initialize them
            graph[source].push(destination); //graph at the source points to the destination
        }
    }
    return traverse(graph, 'shiny gold bag') - 1;
};


const traverse = (graph, node, visited = new Set()) => { //revisit this method
    if (visited.has(node))
        return 0;

    visited.add(node);

    let numBagColors = 1; //we want a count of things, lets us know what current bag we're at
    for (let neighbor of graph[node]) { //visit neighbors from my current node
        numBagColors += traverse(graph, neighbor, visited); //increase it by the num value of this recursive call
    }

    return numBagColors;
};



const parseLine = (line) => {
  const [ destination, rest ] = line.split('s contain ');

  const sourceSegments = rest.split(', ');
  const sources = [];
  for (let i = 0; i < sourceSegments.length; i += 1) {
    const segment = sourceSegments[i];
    const amount = Number(segment[0]);
    let source = amount === 1 ? segment.slice(2) : segment.slice(2, -1);

    if (i === sourceSegments.length - 1)
      source = source.slice(0, -1);

    sources.push(source);
  }
  return {
    destination,
    sources
  };
};

//console.log(parseLine('dark turquoise bags contain 4 dark bronze bags, 3 posh tan bags'));

solve().then(console.log); // 101
