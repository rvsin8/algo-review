const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines(); 
    let numValid = 0; //start the password validation
    for (let line of lines) { //iterate
        const {min, max, char, password } = createObj(line); //get the vales for each
        const count = charCount(char, password); //get the count for char in password
        if (min <= count && count <= max){ // if the count is greater/equal min but smaller/equal max then return that valid password
            numValid++; //get all valid passwords

        }
    }
    return numValid; //return the total passwords that are valid
}

const createObj = (line) => { //helper function 
    const [ rangeSeg, charSeg, password ] = line.split(' '); //we get it in 13-14 p: pppppppppppptx format
    const [min, max] = rangeSeg.split("-").map(Number); //we want to get the min and max values and we map to get it in NUMBERS
    const char = charSeg[0];   // to get rid of the colon
    
    return {
        min,
        max,
        char,
        password
    }; //creating an object - the ket is min but the variable would be 13

};

const charCount = (target, str) => { //we want to get the target character and see how many times it appears in the str
    let count = 0; //start the count
    for (let char of str) { //iterate through every character int he string
        if (char === target) { //check if character is  = to the target
            count += 1; //increment the count
        }
    }
    return count; 
};

solve().then(console.log);