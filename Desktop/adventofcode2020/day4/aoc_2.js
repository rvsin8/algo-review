const fs = require('fs').promises;

const readEntries = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n\n');
};

const solve = async () => {
    const entries = await readEntries();
    const rows = entries.map(parseEntry); //this will give us all the rows
    
    const validators = [ //valid criteria by criteria
        validByr,
        validEcl,
        validEyr,
        validHcl,
        validHgt,
        validIyr,
        validPid,
    ];
    let numValid = 0; //start the count for valid passports

    for (let row of rows){ //iterate through each row in passports
        const isValid = validators.every(validator => validator(row)); //if every row is valid in a passsport
        if (isValid){
            numValid += 1; //we count
        }

    }
    return numValid; //return final num of valid passports
};

const validRange = (data, key, min, max) => {
    if (data[key] === undefined) //if key of data is undefined that means it is not a member/present in the object
        return false; //so return false
    const val = Number(data[key]); //access the number in the data
    return min <= val && val <= max; //this should take care of the years requirements
};

const validHcl = (data) => {
    if (data.hcl === undefined) //if key of data is undefined that means it is not a member/present in the object
        return false;
    return data.hcl.match(/^#([0-9a-f]{6})$/) !== null; //match function lookup
};

const validPid = (data) => {
    if (data.pid === undefined) //if key of data is undefined that means it is not a member/present in the object
        return false;
    return data.pid.match(/^([0-9]{9})$/) !== null; //match function lookup
};

const validEcl = (data) => {
    if (data.ecl === undefined) //if key of data is undefined that means it is not a member/present in the object
        return false;
    const colors = new Set(['amb', 'blu', 'brn', 'gry', 'grn', 'hzl', 'oth']);
    return colors.has(data.ecl);
};

const validByr = (data) => {
    return validRange(data, 'byr', 1920, 2002) //range in criteria
};

const validIyr = (data) => {
    return validRange(data, 'iyr', 2010, 2020) //range in criteria
};

const validEyr = (data) => {
    return validRange(data, 'eyr', 2020, 2030) //range in criteria
};

const validHgt = (data) => { //logic for height
    if (data.hgt === undefined) //if key of data is undefined that means it is not a member/present in the object
        return false;

    const unit = data.hgt.slice(-2); //-2 goes backwards starting with the second to last characters
    const val = Number(data.hgt.slice(0, -2)); //we want to slice from the beginning up until we hit the unit of measurement
    
    if (unit === 'in'){
        return 59 <= val && val <= 76; //valid range for inches

    } else if (unit === 'cm'){
        return 150 <= val && val <= 193; //valid range for cm

    } else {
        return false;
    }

}

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
