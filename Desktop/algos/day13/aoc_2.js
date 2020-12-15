const fs = require('fs').promises;

const parseLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await parseLines();
    const [ line1, line2 ] = lines; //separate my output by two
    const buses = line2.split(',') //we want to split on the commas to get a nice array, 
        .map(bus => bus === 'x' ? 1 : Number(bus)); //if the bus is equal to an 'x' then treat it like the number 1 if not then convert it to the number

        let time = 0; //we need our time variable at 0
        let stepSize = buses[0]; //begins tep size to the first bus

        for (let i = 1; i < buses.length; i += 1){ //we want to iterate and use up every bus, since we already start at 0 we start at 1
            const bus = buses[i]; //grab the current bus 

            while ( (time + i) % bus !== 0 ) { // if the time is not divisible by the bus keep going
                time += stepSize; //increment by the stepSize for every indivisible number

            }

        stepSize *= bus; //if i just multiply the stepSize to the bus; we won't miss any past iterations




    }

    return time; //the final time is, from the first bus

}; 

solve().then(console.log); //955584