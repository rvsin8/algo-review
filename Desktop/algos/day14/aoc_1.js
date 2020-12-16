const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    console.log(lines);

    
}; 

const parseCommand = (line) => { //takes in a line to return an object
    const [ seg1, seg2] = line.split(' = '); //split them in seg 1 and seg 2, before and after the equal sign
    if (seg1.slice(0,3) === 'mem'){ //the first 3 char of seg1, so we get indices 0 1 & 2 and if so we do some logic
        const openBracket = seg1.indexOf('['); //locate open bracket
        const closeBracket = seg1.indexOf(']'); //locate close bracket

        return{
            type: 'mem',
            address: seg1.slice(openBracket + 1, closeBracket), //parse out a specific address
            value: Number(seg2) //points to a value of my seg 2 in Number version
        }
    } else {
        return {
            type: 'mask', //type is a mask
            value: seg2 //
        }
    }

};

parseCommand('mem[17752] = 2606028');
parseCommand('mask = 110000011XX0000X101000X10X01XX001011');

solve().then(console.log); //955584