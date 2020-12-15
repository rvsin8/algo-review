const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};


const cardinals = new Set(['N', 'S', 'E', 'W']); //north south each west set to check things, faster lookup we use Set



const solve = async () => {
    const lines = await readLines();
    const commands = lines.map(parseCommand); //we have the numbers and types in a table
    const cardinalCommands = commands.filter(command => cardinals.has(command.type)); //to check if our cardinal has that type
    const rotationCommands = commands.filter(command => !cardinals.has(command.type)); //to check if our cardinal does not have that type
    console.log(calcCardinal(cardinalCommands)); //only directions not rotations

    
}; 


const parseCommand = (line) => { //grab the letter and number parts
    const type = line[0]; //the letter, its always one letter
    const val = Number(line.slice(1)); //the number part, i can be 1, 2 or 3 digits so we use Number static method
    return { type, val };

};

const calcCardinal = (commands) => { //commands are just the commands with N S E W
    const ship = { x: 0, y: 0 }; //where the ship begins at origin
    for (let command of commands) { //we want to look into every single command
        const { type, val } = command; //type of command the number value and type
        if (type === 'N'){ //if my type equal north
            ship.y += val; //it will be a positive y direction in value
        } else if (type === 'S'){ //if my type equal north
            ship.y -= val; //it will be a negative y direction in value
        } else if (type === 'E'){ //if my type equal north
            ship.x += val; //it will be a positive x direction in value
        } else if (type === 'W'){ //if my type equal north
            ship.x -= val; //it will be a negative x direction in value
        }
    }
    return ship;
};




solve().then(console.log); //955584
