--- Part Two ---
Ding! The "fasten seat belt" signs have turned on. Time to find your seat.

It's a completely full flight, so your seat should be the only missing boarding pass in your list. However, there's a catch: some of the seats at the very front and back of the plane don't exist on this aircraft, so they'll be missing from your list as well.

Your seat wasn't at the very front or back, though; the seats with IDs +1 and -1 from yours will be in your list.

What is the ID of your seat?

Your puzzle answer was 599.

const fs = require('fs').promises;

const readEntries = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n');
};

const solve = async () => {
    const lines = await readEntries();
    const ids = lines.map(getSeatId);
    const sortedIds = ids.sort((a, b) => a - b); //built-in sort method, decreasing order *check this out*
    for (let i = 1; i < sortedIds.length - 1; i++){ //iteration through the seat ids
        const curr = sortedIds[i]; //curr seat
        const next = sortedIds[i+1]; //next seat
        if (curr + 1 !== next) { //if this is true we found the gap
            return curr + 1;
        }
    }
    console.log(sortedIds)
};
const getSeatId = (str) => {
    const rowInfo = str.slice(0, 7); //row info, up to 6 not including 7
    const colInfo = str.slice(7); //col info, start at idx 7
    const row = (binaryFind(rowInfo, 'F', 'B', 128)); //row requirement
    const col = (binaryFind(colInfo, 'L', 'R', 8)); //col requirement 
    return (8 * row) + col;

};

const binaryFind = (str, bottomSym, topSym, n) => {
    let lo = 0;
    let hi = n;
    for (let char of str) { //iterate through each letter in the string
        const mid = Math.floor((lo + hi) / 2); //get the midpoint, Mathfloor takes into account for odd number avgs
        if (char === bottomSym) {
            //take the lower half
            hi = mid; //replace F value on hi 
        } else if (char === topSym){
            //take the upper half
            lo = mid; //replace B value on lo
        }
    }
    return lo;
};

solve().then(console.log); //806