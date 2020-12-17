const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const commands = lines.map(parseCommand); //map over all my lines

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
            ...partialAddresses.map(address => '0' + addr), //if i map over them i know each of them will be a string, for each address and take a 0 and put it infront of the string //we want to put the '...' to make sure they don't nest deeply
            ...partialAddresses.map(address => '1' + addr) //if i map over them i know each of them will be a string, for each address and take a 1 and put it infront of the string  //we want to put the '...' to make sure they don't nest deeply
        ]
    } else { //an else lets us know the first char is not an x its a 0 or 1
        return partialAddresses.map(addr => firstChar + addr);
    }

};

console.log(getAddresses('01x01')); //whenever you get an x it should be doubled because you can get both 0 and 1

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