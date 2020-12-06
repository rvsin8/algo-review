const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines(); 
    let numValid = 0; //begin the count
    for (let line of lines){ //iterate
        const { pos1, pos2, char, password } = createObj(line); //get positions, char and pw
        if ((password[pos1] === char || password[pos2] === char) && !(password[pos1] === char && password[pos2] === char) ) { //we want one requirement met not both !
            numValid++; //iterate all valid requirement 

        }
    }
    return numValid; //return total count of valid passwords

};

const createObj = (line) => { //helper function 
    const [ rangeSeg, charSeg, password ] = line.split(' '); //we get it in 13-14 p: pppppppppppptx format
    const [pos1, pos2] = rangeSeg.split("-").map(Number); //we want to get the pos1 and pos2 values and we map to get it in NUMBERS
    const char = charSeg[0];   // to get rid of the colon
    
    return {
        pos1: pos1 - 1, //to get the right idx
        pos2: pos2 - 1, //to get the right idx
        char,
        password
    }; //creating an object - the ket is min but the variable would be 13

};

solve().then(console.log);