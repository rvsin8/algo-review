--- Part Two ---
For some reason, the sea port's computer system still can't communicate with your ferry's docking program. It must be using version 2 of the decoder chip!

A version 2 decoder chip doesn't modify the values being written at all. Instead, it acts as a memory address decoder. Immediately before a value is written to memory, each bit in the bitmask modifies the corresponding bit of the destination memory address in the following way:

If the bitmask bit is 0, the corresponding memory address bit is unchanged.
If the bitmask bit is 1, the corresponding memory address bit is overwritten with 1.
If the bitmask bit is X, the corresponding memory address bit is floating.
A floating bit is not connected to anything and instead fluctuates unpredictably. In practice, this means the floating bits will take on all possible values, potentially causing many memory addresses to be written all at once!

For example, consider the following program:

mask = 000000000000000000000000000000X1001X
mem[42] = 100
mask = 00000000000000000000000000000000X0XX
mem[26] = 1
When this program goes to write to memory address 42, it first applies the bitmask:

address: 000000000000000000000000000000101010  (decimal 42)
mask:    000000000000000000000000000000X1001X
result:  000000000000000000000000000000X1101X
After applying the mask, four bits are overwritten, three of which are different, and two of which are floating. Floating bits take on every possible combination of values; with two floating bits, four actual memory addresses are written:

000000000000000000000000000000011010  (decimal 26)
000000000000000000000000000000011011  (decimal 27)
000000000000000000000000000000111010  (decimal 58)
000000000000000000000000000000111011  (decimal 59)
Next, the program is about to write to memory address 26 with a different bitmask:

address: 000000000000000000000000000000011010  (decimal 26)
mask:    00000000000000000000000000000000X0XX
result:  00000000000000000000000000000001X0XX
This results in an address with three floating bits, causing writes to eight memory addresses:

000000000000000000000000000000010000  (decimal 16)
000000000000000000000000000000010001  (decimal 17)
000000000000000000000000000000010010  (decimal 18)
000000000000000000000000000000010011  (decimal 19)
000000000000000000000000000000011000  (decimal 24)
000000000000000000000000000000011001  (decimal 25)
000000000000000000000000000000011010  (decimal 26)
000000000000000000000000000000011011  (decimal 27)
The entire 36-bit address space still begins initialized to the value 0 at every address, and you still need the sum of all values left in memory at the end of the program. In this example, the sum is 208.

Execute the initialization program using an emulator for a version 2 decoder chip. What is the sum of all values left in memory after it completes?

Your puzzle answer was 3415488160714.

const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const commands = lines.map(parseCommand); //map over all my lines
    
    const memory = {}; //create a memory object we need to simulate
    let mask = null; //
    for (let command of commands){ //iterate through every commands 
        const { type, value, address } = command; //grab the type value and address when applicable
        if (type === 'mask') { //if the type is a mask
            mask = value; //set it to the value
        } else {
            const floatingAddress = getFloating(address, mask); 
            const addresses = getAddresses(floatingAddress);
            for (let addr of addresses){ //for each of those addresses
                memory[addr] = value; //for each of those addresses, kep into our addr memory and key into it the value of a base10 num
            }

        }
    }
    const values = Object.values(memory);
    return values.reduce((a, b) => a + b ); //return the total of the values

}; 

const getFloating = (address, mask) => {
    let newAddress = ''; //new address in a string
    for (let i = 0; i < address.length; i += 1){
        if (mask[i] === '0') { //if mask is 0 at first index
            newAddress += address[i]; //we bring back the original address
        } else {
            newAddress += mask[i]; //if its not 0 we bring in the new address 
        }
    }
    return newAddress; //return the new address

};

//const v = '1010';
//const m = 'XX01';
//console.log(applyMask(v, m));


const getAddresses = (floatingAddress) => { //we get floating addresses


    if (floatingAddress.length === 0) //if it has a length of 0 it is our base case
        return [''];

    const firstChar = floatingAddress[0]; //grab the first char or floating address
    const restAddress = floatingAddress.slice(1); //grab everything after the first char, shrinks the size of the address
    const partialAddresses = getAddresses(restAddress); //it should be an array that all the addresses that match that particular string
    if (firstChar === 'X'){ //if the first char equal X
        return [ 
            ...partialAddresses.map(addr => '0' + addr), //if i map over them i know each of them will be a string, for each address and take a 0 and put it infront of the string //we want to put the '...' to make sure they don't nest deeply
            ...partialAddresses.map(addr => '1' + addr) //if i map over them i know each of them will be a string, for each address and take a 1 and put it infront of the string  //we want to put the '...' to make sure they don't nest deeply
        ]
    } else { //an else lets us know the first char is not an x its a 0 or 1
        return partialAddresses.map(addr => firstChar + addr); //return all the partial address with that first char (0 or 1)
    }

};

console.log(getAddresses('01X01X')); //whenever you get an x it should be doubled because you can get both 0 and 1

const parseCommand = (line) => { //takes in a line to return an object
    const [ seg1, seg2 ] = line.split(' = '); //split them in seg 1 and seg 2, before and after the equal sign
    if (seg1.slice(0,3) === 'mem'){ //the first 3 char of seg1, so we get indices 0 1 & 2 and if so we do some logic
        const openBracket = seg1.indexOf('['); //locate open bracket, if it is a memory type it will have this
        const closeBracket = seg1.indexOf(']'); //locate close bracket, if it is a memory type it will have this

        return {
            type: 'mem',
            address: Number(seg1.slice(openBracket + 1, closeBracket)).toString(2).padStart(36, '0'), //parse out a specific address, slice after the open the bracket and we want to go UP TO the close bracket
            value: Number(seg2)
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