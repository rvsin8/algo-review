const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines(); //array of my lines
    const numbers = lines.map(Number); //get the true number 
    //console.log(numbers)
    const invalidNum = firstInvaid(numbers); //we need a subarr that will add up to out invalid num
    for (let i = 0; i < numbers.length; i++) { //nested loops
        for (let j = 0; j < numbers.length; j++){ //get the pair
            const subArray = numbers.slice(i, j+1); //if i is 5 and j is 8 we want to see te range 5-8, j +1 includes the jth element
            if (sumArray(subArray) === invalidNum){ //if the sum equals to the invalid num, we found the sequence we are looking for
                return Math.min(...subArray) + Math.max(...subArray); //return the min + the max

            }
        }
    }
};


const sumArray = (array) => { //sum of array method
    let sum = 0; //start with sum 0
    for (let ele of array){ //for every ele we go through
        sum += ele; //add it to the sum
    }
    return sum; //the total sum
};

//console.log(sumArray([5,2,8])); we get 15




const firstInvaid = (numbers) => {
    for (let i = 25; i < numbers.length; i++){ // i want to start at i is 25 so we can look into previous indices
        const prev = numbers.slice(i - 25, i); //relook this //give me i - 25 as a starting point, if i is 25 then im looking at the 26th indicies bc index begins at 0, this i - 25 will give me range from i to 24.
            if (pairSum(prev, numbers[i]) === false ) { //if pairSum is false then we found our invalid number
                return numbers[i]; //return that number in that index - invalid numbers
            }

    }

};

const pairSum = (array, target) => { //pairs that add to our some, it will take in an array and our target
    for (let i = 0; i < array.length; i++){ //finding pair so we use nested loops
        for (let j = i + 1; j < array.length; j++) {//grab the other ele in the pair, i + 1 give us unique pairs
            if (array[i] + array[j] === target) //when we find the perfect pair
                return true;
        }
    }
    return false;
};

//console.log(pairSum([1, 2, 4, 7], 5)); //true
//console.log(pairSum([1, 2, 4, 7], 10));



solve().then(console.log);
