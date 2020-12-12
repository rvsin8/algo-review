const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readLines(); 
    const instructions = lines.map(parseInstruction); //map instructions line by line
    //console.table(instructions); get a table
    
};

const getAcc = (instructions, i = 0 ) => { //we will begin at 0 as our acc
    const { type, val } = instructions[i];

    //jmp
    //acc
    //nop
    if (type === 'jmp'){ //we need conditionals for each
        return getAcc(instructions, i + val); //jmp is i(current instruction im at) + val presented and adding it to our current i

    } else if (type === 'acc'){
        return val + getAcc(instructions, i + val); //my value plus what my recursive call returns
    } else {
        return getAcc(instruction, i + 1); //proceed to the very next instruction
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