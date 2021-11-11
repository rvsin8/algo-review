--- Part Two ---
It's getting pretty expensive to fly these days - not because of ticket prices, but because of the ridiculous number of bags you need to buy!

Consider again your shiny gold bag and the rules from the above example:

faded blue bags contain 0 other bags.
dotted black bags contain 0 other bags.
vibrant plum bags contain 11 other bags: 5 faded blue bags and 6 dotted black bags.
dark olive bags contain 7 other bags: 3 faded blue bags and 4 dotted black bags.
So, a single shiny gold bag must contain 1 dark olive bag (and the 7 bags within it) plus 2 vibrant plum bags (and the 11 bags within each of those): 1 + 1*7 + 2 + 2*11 = 32 bags!

Of course, the actual rules have a small chance of going several levels deeper than this example; be sure to count all of the bags, even if the nesting becomes topologically impractical!

Here's another example:

shiny gold bags contain 2 dark red bags.
dark red bags contain 2 dark orange bags.
dark orange bags contain 2 dark yellow bags.
dark yellow bags contain 2 dark green bags.
dark green bags contain 2 dark blue bags.
dark blue bags contain 2 dark violet bags.
dark violet bags contain no other bags.
In this example, a single shiny gold bag must contain 126 other bags.

How many individual bags are required inside your single shiny gold bag?

Your puzzle answer was 9569.

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
