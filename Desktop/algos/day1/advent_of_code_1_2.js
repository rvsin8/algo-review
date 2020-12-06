const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const numbers = lines.map(Number); //turn those strings into actual numbers
    const pairSums = {}; //hash table (JS set) is best because it is the fast lookup data set
    for (let i = 0; i < numbers.length; i++) {  //iterate through all possible pair sums, nested loop for both pairs
        for (let j = 1 + i; j < numbers.length; j++) { //iterate through all possible pair sums, nested loop for both pairs
            const num1 = numbers[i]; //store the first ele
            const num2 = numbers[j]; // store the second ele
            const sum = num1 + num2; // store their sums 
            pairSums[sum] = [num1, num2]; //sum is the key and the nums are the hashes
        }
    }

    for (let num of numbers) {
        const diff = 2020 - num; //to find the hash key
        if (diff in pairSums){ //if that ket exists
           const [ numB, numC ] = pairSums[diff]; //grab the eles in that key
           return num * numB * numC; //get the product 

        }
    }

}; 

solve().then(console.log); 


