const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const numbers = lines.map(Number); //turn those strings into actual numbers
    const numberSet = new Set(); //hash table (JS set) is best because it is the fast lookup data set
    for (let number of numbers){ //that gives you every ele of that array
      const difference = 2020 - number; //difference of 2020 and the current number being iterated
      if (numberSet.has(difference)){ //if this set has the difference then we found the pair
        return number * difference; //return the product ! aka the answer
      }
      numberSet.add(number); //add the current number to the set after you check the logic above

    } //iterate

    
}; 

solve().then(console.log); //955584