const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines();
    console.log(lines);

    
}; 

const getActiveNodes = (lines) => {
    const nodes = new Set(); //store info, the collection of coordinates //keep track of coordinates
    for (let x = 0; x < lines.length; x += 1) { //x will give me the vertical positions
        const nodes = new Set();
        for (let y = 0; y < lines[0].length; y += 1) { //y will give me the horizontal positions
            const char = lines[x][y]; //symbol at this position, the char
            if (char === '#')
        }
    }
};

solve().then(console.log); 

