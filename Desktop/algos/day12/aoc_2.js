


const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};


const solve = async () => {
    const lines = await readLines();
    const commands = lines.map(parseCommand); //we have the numbers and types in a table
    const { x, y } = calc(commands);
    return Math.abs(x) + Math.abs(y);

    
}; 


const parseCommand = (line) => { //grab the letter and number parts
    const type = line[0]; //the letter, its always one letter
    const val = Number(line.slice(1)); //the number part, i can be 1, 2 or 3 digits so we use Number static method
    return { type, val };

};

const calc = (commands) => { //take in a command
    const ship = { x: 0, y: 0 }; //we need to track the ship
    let waypoint = { x: 10, y: 1 }; //in the problem we have specific coordinates for the waypoint
    for (let command of commands) { //we want to look into every single command
        const { type, val } = command; //type of command the number value and type
        if (type === 'N'){ //if my type equal north
            waypoint.y += val; //it will be a positive y direction in value
        } else if (type === 'S'){ //if my type equal north
            waypoint.y -= val; //it will be a negative y direction in value
        } else if (type === 'E'){ //if my type equal north
            waypoint.x += val; //it will be a positive x direction in value
        } else if (type === 'W'){ //if my type equal north
            waypoint.x -= val; //it will be a negative x direction in value
        } else if (type === 'L'){ //if my type equal L
            const angle = degreeToRadians(val);
             waypoint = rotatePoint(waypoint, angle);
            
        } else if (type === 'R') {//if my type equal R
            const angle = degreeToRadians(val);
            waypoint = rotatePoint(waypoint, -angle); //flip the sign for the L we don't, clockwise means - in math
        } else {
            ship.x += waypoint.x * val;
            ship.y += waypoint.y * val;
        }

    }
    return ship;
};

const rotatePoint = (point, angle) => {
  const { x, y } = point;
  const newX = Math.round((x * Math.cos(angle)) - (y * Math.sin(angle)));
  const newY = Math.round((y * Math.cos(angle)) + (x * Math.sin(angle)));
  return { x: newX, y: newY }
};



const degreeToRadians = (deg) => deg * (Math.PI / 180 );

console.log(degreeToRadians(90));


solve().then(console.log); //955584

