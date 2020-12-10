const { read } = require('fs');

const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines(); //array of every line in the file - readLines
    const graph = {};
    for (let line of lines) { //iterate through each line 
        const { destination, source } = parseLine(line); //get parse line for every line -- we will get back an object with a destination and source
        if (!(destination in graph))
        
    
    }
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

console.log(parseLine('dark turquoise bags contain 4 dark bronze bags, 3 posh tan bags'));


//solve().then(console.log); // 101
