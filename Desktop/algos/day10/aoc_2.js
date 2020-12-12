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
    if (i === array.length - 1) //if my index is last position that means we found a successful way which would be 1
        return 1;

    let total = 0;

    if (array[i + 1] && ((array[i + 1] - array[i]) <= 3)) //if my next pos is in bounds & my next position has a pos that is less than or equal to 3 
        total += numWays(array, i + 1);//then make that recursive call

    if (array[i + 2] && ((array[i + 2] - array[i]) <= 3)) //if my next pos is in bounds & my next position has a pos that is less than or equal to 3 
        total += numWays(array, i + 2);//then make that recursive call

    if (array[i + 3] && ((array[i + 3] - array[i]) <= 3)) //if my next pos is in bounds & my next position has a pos that is less than or equal to 3 
        total += numWays(array, i + 3);//then make that recursive call

};

solve().then(console.log); //955584