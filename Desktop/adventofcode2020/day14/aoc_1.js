--- Day 14: Docking Data ---
As your ferry approaches the sea port, the captain asks for your help again. The computer system that runs this port isn't compatible with the docking program on the ferry, so the docking parameters aren't being correctly initialized in the docking program's memory.

After a brief inspection, you discover that the sea port's computer system uses a strange bitmask system in its initialization program. Although you don't have the correct decoder chip handy, you can emulate it in software!

The initialization program (your puzzle input) can either update the bitmask or write a value to memory. Values and memory addresses are both 36-bit unsigned integers. For example, ignoring bitmasks for a moment, a line like mem[8] = 11 would write the value 11 to memory address 8.

The bitmask is always given as a string of 36 bits, written with the most significant bit (representing 2^35) on the left and the least significant bit (2^0, that is, the 1s bit) on the right. The current bitmask is applied to values immediately before they are written to memory: a 0 or 1 overwrites the corresponding bit in the value, while an X leaves the bit in the value unchanged.

For example, consider the following program:

mask = XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
mem[8] = 11
mem[7] = 101
mem[8] = 0
This program starts by specifying a bitmask (mask = ....). The mask it specifies will overwrite two bits in every written value: the 2s bit is overwritten with 0, and the 64s bit is overwritten with 1.

The program then attempts to write the value 11 to memory address 8. By expanding everything out to individual bits, the mask is applied as follows:

value:  000000000000000000000000000000001011  (decimal 11)
mask:   XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
result: 000000000000000000000000000001001001  (decimal 73)
So, because of the mask, the value 73 is written to memory address 8 instead. Then, the program tries to write 101 to address 7:

value:  000000000000000000000000000001100101  (decimal 101)
mask:   XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
result: 000000000000000000000000000001100101  (decimal 101)
This time, the mask has no effect, as the bits it overwrote were already the values the mask tried to set. Finally, the program tries to write 0 to address 8:

value:  000000000000000000000000000000000000  (decimal 0)
mask:   XXXXXXXXXXXXXXXXXXXXXXXXXXXXX1XXXX0X
result: 000000000000000000000000000001000000  (decimal 64)
64 is written to address 8 instead, overwriting the value that was there previously.

To initialize your ferry's docking program, you need the sum of all values left in memory after the initialization program completes. (The entire 36-bit address space begins initialized to the value 0 at every address.) In the above example, only two values in memory are not zero - 101 (at address 7) and 64 (at address 8) - producing a sum of 165.

Execute the initialization program. What is the sum of all values left in memory after it completes? (Do not truncate the sum to 36 bits.)

Your puzzle answer was 14954914379452.


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