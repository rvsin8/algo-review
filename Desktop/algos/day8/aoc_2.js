--- Part Two ---
After some careful analysis, you believe that exactly one instruction is corrupted.

Somewhere in the program, either a jmp is supposed to be a nop, or a nop is supposed to be a jmp. (No acc instructions were harmed in the corruption of this boot code.)

The program is supposed to terminate by attempting to execute an instruction immediately after the last instruction in the file. By changing exactly one jmp or nop, you can repair the boot code and make it terminate correctly.

For example, consider the same program from above:

nop +0
acc +1
jmp +4
acc +3
jmp -3
acc -99
acc +1
jmp -4
acc +6
If you change the first instruction from nop +0 to jmp +0, it would create a single-instruction infinite loop, never leaving that instruction. If you change almost any of the jmp instructions, the program will still eventually find another jmp instruction and loop forever.

However, if you change the second-to-last instruction (from jmp -4 to nop -4), the program terminates! The instructions are visited in this order:

nop +0  | 1
acc +1  | 2
jmp +4  | 3
acc +3  |
jmp -3  |
acc -99 |
acc +1  | 4
nop -4  | 5
acc +6  | 6
After the last instruction (acc +6), the program terminates by attempting to run the instruction below the last instruction in the file. With this change, after the program terminates, the accumulator contains the value 8 (acc +1, acc +1, acc +6).

Fix the program so that it terminates normally by changing exactly one jmp (to nop) or nop (to jmp). What is the value of the accumulator after the program terminates?

Your puzzle answer was 944.

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