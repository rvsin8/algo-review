const fs = require('fs').promises;

const readEntries = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n\n');
};

const solve = async () => {
    const entries = await readEntries();
    const rows = entries.map(parseEntry); //this will give us all the rows
    const requiredFields = [
        'ecl',
        'iyr',
        'hgt',
        'eyr',
        'pid',
        'byr',
        'hcl'
    ];
    let numValid = 0
    for (let row of rows) { //iterate through every row
        const isValid = requiredFields.every(field => field in row); //should return a boolean, the every method if every field is inside  the row object
        if (isValid){ //if the row is valid 
            numValid++; //increment it if it is valid
        }
    }
    return numValid;
};

const parseEntry = (str) => { 
    const parts = str.split(/\s/); //split on all white case characters just not on lines
    const obj = {}; //create and object that starts empty
    for (let part of parts) { //iterate through the array
        const [k,v] = part.split(':'); //split it at the ':' and destructure it as key / value pairs
        obj[k] = v; //now we get key-values pairs
    }
    return obj;


}

solve().then(console.log);
