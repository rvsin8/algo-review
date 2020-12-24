--- Part Two ---
Before you can give the destination to the captain, you realize that the actual action meanings were printed on the back of the instructions the whole time.

Almost all of the actions indicate how to move a waypoint which is relative to the ship's position:

Action N means to move the waypoint north by the given value.
Action S means to move the waypoint south by the given value.
Action E means to move the waypoint east by the given value.
Action W means to move the waypoint west by the given value.
Action L means to rotate the waypoint around the ship left (counter-clockwise) the given number of degrees.
Action R means to rotate the waypoint around the ship right (clockwise) the given number of degrees.
Action F means to move forward to the waypoint a number of times equal to the given value.
The waypoint starts 10 units east and 1 unit north relative to the ship. The waypoint is relative to the ship; that is, if the ship moves, the waypoint moves with it.

For example, using the same instructions as above:

F10 moves the ship to the waypoint 10 times (a total of 100 units east and 10 units north), leaving the ship at east 100, north 10. The waypoint stays 10 units east and 1 unit north of the ship.
N3 moves the waypoint 3 units north to 10 units east and 4 units north of the ship. The ship remains at east 100, north 10.
F7 moves the ship to the waypoint 7 times (a total of 70 units east and 28 units north), leaving the ship at east 170, north 38. The waypoint stays 10 units east and 4 units north of the ship.
R90 rotates the waypoint around the ship clockwise 90 degrees, moving it to 4 units east and 10 units south of the ship. The ship remains at east 170, north 38.
F11 moves the ship to the waypoint 11 times (a total of 44 units east and 110 units south), leaving the ship at east 214, south 72. The waypoint stays 4 units east and 10 units south of the ship.
After these operations, the ship's Manhattan distance from its starting position is 214 + 72 = 286.

Figure out where the navigation instructions actually lead. What is the Manhattan distance between that location and the ship's starting position?

Your puzzle answer was 35292.

Both parts of this puzzle are complete! They provide two gold stars: **


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

