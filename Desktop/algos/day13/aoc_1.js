
const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const [ line1, line2 ] = lines; //separate my output by two
    const earliest = Number(line1); //we want the first line value to be a number
    const buses = line2.split(',') //we want to split on the commas to get a nice array, 
        .filter(bus => bus !== 'x') //we want to exclude x because it accounts for buses  not in service 
        .map(bus => Number(bus)); //map the just the numbers not x 
    for ( let time = earliest; true; time += 1 ){ // we want to start at the earliest time
        for ( let bus of buses ){ // iterates through every ele of that buses array
            if (time % bus === 0){ //if its a time divisible by the bus
               const waitTime =  time - earliest; //how long we wait
                return waitTime * bus;
            }

        }
    }
}; 

solve().then(console.log); //955584

