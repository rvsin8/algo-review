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
    return diffCount(input, 1) * diffCount(input, 3);
}; 

const diffCount = (array, n) => { //helper function  that takes in an array and a value "n"
  let count = 0; //start the count here
  for (let i = 0; i < array.length - 1; i++) { //iterate through the array entirely
    const curr = array[i]; //current ele
    const next = array[i + 1]; //next ele
    if (next - curr === n) //if the difference btw the 2 is n
      count ++; //count it 
  }
  return count; // return final count

};

solve().then(console.log); //955584

