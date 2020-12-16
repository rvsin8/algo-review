const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const commands = lines.map(parseCommand); //map over all my lines
    const memory = {};
    let mask = null;
    for (let command of commands) { //
        const { type, value, address } = command; //i have the type, value and address at times
        if (type === 'mask'){ //if my type is equal to my mask
            mask = value; // mask equals the value
        } else { //if its a mem command i need to apply the mask into before memory
            const maskedValue = applyMask(value, mask); // binary string
            memory[address] = maskedValue;
        }
    }
    const base10Values = Object.values(memory).map(bin => parseInt(bin, 2)); //map every memory value and convert it into every integer into binary
    return base10Values.reduce((a,b) => a + b); //reducer to take the sum by using the acc and the current ele
    
}; 

const applyMask = (value, mask) => { //take in two strings, the value and the mask
    let newValue = '';
    for (let i = 0; i < value.length; i += 1){ //iterate through the value
        if (mask[i] === 'X'){ //if the mask char is x we do nothing, and keep the original
            newValue += value[i]; 

        } else {
            newValue += mask[i]; //if the mask char is a 1 or a 0 we add it to the new Value
        }
    }
    return newValue;

};

//const v = '1010';
//const m = 'XX01';
//console.log(applyMask(v, m));


const parseCommand = (line) => { //takes in a line to return an object
    const [ seg1, seg2 ] = line.split(' = '); //split them in seg 1 and seg 2, before and after the equal sign
    if (seg1.slice(0,3) === 'mem'){ //the first 3 char of seg1, so we get indices 0 1 & 2 and if so we do some logic
        const openBracket = seg1.indexOf('['); //locate open bracket, if it is a memory type it will have this
        const closeBracket = seg1.indexOf(']'); //locate close bracket, if it is a memory type it will have this

        return {
            type: 'mem',
            address: seg1.slice(openBracket + 1, closeBracket), //parse out a specific address, slice after the open the bracket and we want to go UP TO the close bracket
            value: Number(seg2).toString(2).padStart(36, '0') //points to a value of my seg 2 in Number version //we can get a binary with this built-in method //pad.start is a length and the pad after, it operates on a string and puts enough of your char to match your output string
        }
    } else {
        return {
            type: 'mask', //type is a mask
            value: seg2 //
        }
    }

};

//console.log(parseCommand('mem[17752] = 2606028'));
//console.log(parseCommand('mask = 110000011XX0000X101000X10X01XX001011'));

solve().then(console.log); //955584