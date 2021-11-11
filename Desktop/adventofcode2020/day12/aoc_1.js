--- Day 12: Rain Risk ---
Your ferry made decent progress toward the island, but the storm came in faster than anyone expected. The ferry needs to take evasive actions!

Unfortunately, the ship's navigation computer seems to be malfunctioning; rather than giving a route directly to safety, it produced extremely circuitous instructions. When the captain uses the PA system to ask if anyone can help, you quickly volunteer.

The navigation instructions (your puzzle input) consists of a sequence of single-character actions paired with integer input values. After staring at them for a few minutes, you work out what they probably mean:

Action N means to move north by the given value.
Action S means to move south by the given value.
Action E means to move east by the given value.
Action W means to move west by the given value.
Action L means to turn left the given number of degrees.
Action R means to turn right the given number of degrees.
Action F means to move forward by the given value in the direction the ship is currently facing.
The ship starts by facing east. Only the L and R actions change the direction the ship is facing. (That is, if the ship is facing east and the next instruction is N10, the ship would move north 10 units, but would still move east if the following action were F.)

For example:

F10
N3
F7
R90
F11
These instructions would be handled as follows:

F10 would move the ship 10 units east (because the ship starts by facing east) to east 10, north 0.
N3 would move the ship 3 units north to east 10, north 3.
F7 would move the ship another 7 units east (because the ship is still facing east) to east 17, north 3.
R90 would cause the ship to turn right by 90 degrees and face south; it remains at east 17, north 3.
F11 would move the ship 11 units south to east 17, south 8.
At the end of these instructions, the ship's Manhattan distance (sum of the absolute values of its east/west position and its north/south position) from its starting position is 17 + 8 = 25.

Figure out where the navigation instructions lead. What is the Manhattan distance between that location and the ship's starting position?

Your puzzle answer was 1645.

The first half of this puzzle is complete! It provides one gold star: *


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
    const cardinalDistance = calcCardinal(cardinalCommands); //only directions not rotations
    const rotationDistance = calcRotation(rotationCommands); //only  rotations
    const deltaX = Math.abs(cardinalDistance.x + rotationDistance.x); //to get the x distance we need the abs value of it
    const deltaY = Math.abs(cardinalDistance.y + rotationDistance.y); //to get the y distance we need in abs value of it 

    return deltaX + deltaY; //our answer the sum

    
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

const calcRotation = (commands) => {
    const ship = { x: 0, y: 0, angle: 90 }; //where the ship begins at origin //n is 0 e is 90 s is 180 w is 360
    for (let command of commands) { //we want to look into every single command
        const { type, val } = command; //type of command the number value and type
        if (type === 'L'){ //if my type equal north
            ship.angle = (360 + ship.angle - val) % 360; //reverse order //no matter what we increase by 360 we wll get a positive value instead of a negative one
        } else if (type === 'R'){ //if my type equal north
            ship.angle = (ship.angle + val) % 360; //we have to keep it in respects to 360 so we mod, we need to add whatever value we arrive at to the original value we have
        } else {
            if (ship.angle === 0){
                ship.y += val;
            } else if (ship.angle === 180){ //if my type equal 180
                ship.y -= val; //it will be a negative y direction in value
            } else if (ship.angle === 90){ //if my type equal 90
                ship.x += val; //it will be a positive x direction in value
            } else if (ship.angle === 270){ //if my type equal 270
                ship.x -= val; //it will be a negative x direction in value
            }
        }
        //console.log(ship);
    };
    return ship;
};

//calcRotation([{type:'L', val: 180}])



solve().then(console.log); //955584
