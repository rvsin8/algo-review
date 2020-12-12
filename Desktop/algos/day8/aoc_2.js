const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines(); 
    const instructions = lines.map(parseInstruction); //map instructions line by line
    //console.table(instructions); get a table
    return getAcc(instructions);
    
};

const getAcc = (instructions, i = 0, visited = new Set(), flipAvailable = true) => { //we will begin at 0 as our acc //visited being put in a set makes for quicker search time bc its a hash data structure
    if (i === instructions.length) //lets us know i is right after that last instruction
        return 0;

    if (visited.has(i)) //if it has been visited
        return -Infinity; //you can still add and subtract things from -infinity

    visited.add(i); //make sure instructions are marked as visited
    const newVisited = new Set(visited);
    
    const { type, val } = instructions[i];

    //jmp
    //acc
    //nop
    if (type === 'jmp'){ //we need conditionals for each
        const paths = [ 
            getAcc(instructions, i + val, newVisited, flipAvailable) //jmp is i(current instruction im at) + val presented and adding it to our current i
        ];
        if (flipAvailable)
            paths.push(getAcc(instructions, i + 1, newVisited, false)); //rewatch this part
        return Math.max(...paths); //rewatch this

    } else if (type === 'nop'){
        const paths = [
            getAcc(instructions, i + 1, newVisited, flipAvailable)
        ]; //relook this //my value plus what my recursive call returns
        if (flipAvailable)
            paths.push(getAcc(instructions, i + val, newVisited, false)); //rewatch this part
            return Math.max(...paths); //rewatch this

    } else { //acc
        return val + getAcc(instructions, i + 1, newVisited, flipAvailable); //proceed to the very next instruction
    }

};

const parseInstruction = (str) => { 
    const [ type, val ] = str.split(' '); //splitting a string on a space, you get 2 types of value back a type and value
    return {
        type, //string data
        val: Number(val) //want to make sure its a number and we will do math in the future with these values
    };
};

solve().then(console.log);