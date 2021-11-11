--- Day 7: Handy Haversacks ---
You land at the regional airport in time for your next flight. In fact, it looks like you'll even have time to grab some food: all flights are currently delayed due to issues in luggage processing.

Due to recent aviation regulations, many rules (your puzzle input) are being enforced about bags and their contents; bags must be color-coded and must contain specific quantities of other color-coded bags. Apparently, nobody responsible for these regulations considered how long they would take to enforce!

For example, consider the following rules:

light red bags contain 1 bright white bag, 2 muted yellow bags.
dark orange bags contain 3 bright white bags, 4 muted yellow bags.
bright white bags contain 1 shiny gold bag.
muted yellow bags contain 2 shiny gold bags, 9 faded blue bags.
shiny gold bags contain 1 dark olive bag, 2 vibrant plum bags.
dark olive bags contain 3 faded blue bags, 4 dotted black bags.
vibrant plum bags contain 5 faded blue bags, 6 dotted black bags.
faded blue bags contain no other bags.
dotted black bags contain no other bags.
These rules specify the required contents for 9 bag types. In this example, every faded blue bag is empty, every vibrant plum bag contains 11 bags (5 faded blue and 6 dotted black), and so on.

You have a shiny gold bag. If you wanted to carry it in at least one other bag, how many different bag colors would be valid for the outermost bag? (In other words: how many colors can, eventually, contain at least one shiny gold bag?)

In the above rules, the following options would be available to you:

A bright white bag, which can hold your shiny gold bag directly.
A muted yellow bag, which can hold your shiny gold bag directly, plus some other bags.
A dark orange bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
A light red bag, which can hold bright white and muted yellow bags, either of which could then hold your shiny gold bag.
So, in this example, the number of bag colors that can eventually contain at least one shiny gold bag is 4.

How many bag colors can eventually contain at least one shiny gold bag? (The list of rules is quite long; make sure you get all of it.)

Your puzzle answer was 226.

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
