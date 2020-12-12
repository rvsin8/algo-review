const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines();
    const numbers = lines.map(Number); //we want the strings coverted into numbers
    const sorted = numbers.sort((a,b) => a - b ); //in increasing order
    //console.log(sorted)
    const last = sorted[sorted.length - 1]; //to fix off by one error thats why we do this
    const input = [0, ...sorted, last + 3]; //our true input with 0, sorted array and last element + 3
    numWays(input); //function for our recursive call
}; 

const numWays = (array, i = 0) => { //take in the array, we need to know our current position so we set i at index 0 of the array
    if (i === array.length - 1) //
        return 1;

};

solve().then(console.log); //955584