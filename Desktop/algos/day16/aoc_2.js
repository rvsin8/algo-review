const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n\n');
};



const solve = async () => {
    const [sectionA, sectionB, sectionC] = await readLines(); //we want to split it by sections, we will focus on section A and section C
    const rules = parseA(sectionA);
    const nearbyTickets = parseC((sectionC));
    const validTickets = getValidRows(nearbyTickets, rules);
    //console.log(nearbyTickets.length);
    //console.log(validTickets.length);
    const columns = transpose(validTickets);
    const possible = [];
    console.log(rules);
    for (let num = 0; num < columns.length; num += 1){ //iterate through every col
        const column = columns[num];

        const set = new Set();

        for (let field in rules) { //its an object so we do field in rules
            const rule = rules[field];
            const isCompatible = column.every(val => rule(val));
            if (isCompatible)
                set.add(field);
        }

        possible[num] = set;
    }
    //console.log(possible);

    const map = {};
    while (Object.keys(map).length < columns.length){ //if the keys are less than the num of rules/cols
        for (let col = 0; col < possible.length; col += 1){ //so we go through each col cause they are rules
            const set = possible[col]; //access these diff sets

            if (set.size === 1){ //if the set size is equal to exactly 1
                const label = [...set][0];
                map[label] = col; //we now know that col belongs to that label we got 

                for (let otherSet of possible) { //now we need to let every set know that we found the label so we want to get rid of this in those sets
                    otherSet.delete(label); //we want to delete the set we found earlier that matched from every other set

                }
            }

        }

    }

    //console.log(map);
    const myTicket = parseB(sectionB);
    console.log(myTicket);


};

const transpose = (grid) => { //we need to make our own built in function
    const newGrid = Array(grid[0].length)
    .fill()
    .map(() => []);
    for (let r = 0; r < grid.length; r += 1){
        for (let c = 0; c < grid[0].length; c += 1){
            newGrid[c][r] = grid[r][c];
        }
    }
    return newGrid;

};

//const transposed = transpose([
//    ['a', 'b'],
//    ['c', 'd'],
//    ['e', 'f']
//
//]);

//console.log(transposed)

const getValidRows = (rows, rules) => { //take in all the rows and see how it matches the rules
    const allRules = Object.values(rules); //convert all of your rules, rules are the object and keys are the function
    return rows.filter(row => { //we want to return valid rows
        return !row.some(val => allRules.every(rules => rules(val) === false)); //i want to choose the rows that don't have an invalid value, an invalid val is one that fails every rule
    });

};

const parseA = (section) => {
    const lines = section.split('\n'); //split on the new line char, gives us an array of those strings
    const rules = {}; //want to make rules revolving around keys / values

    for (let line of lines){ //
        const [ field, rangeStr ] = line.split(':'); //parsing out of data// separate field and the range of numbers to check validity 
        //console.log(rangeStr);
        //console.log(field);

        const [ range1, range2 ] = rangeStr.split(' or '); //will give us our two num since we split on the or
        //console.log(range1, range2);
        const numbers1 = range1.split('-').map(Number); //we can split on the - to get straight number data in the range hence we use the built in Numbers function
        const numbers2 = range2.split('-').map(Number); //gives us two separate arrays

        rules[field] = (val) => {
            return numbers1[0] <= val && val <= numbers1[1] || numbers2[0] <= val && val <= numbers2[1] ; //we want to make sure the value is in the range so it says to be greater than the num at index0 while being smaller than the num in index1 aka our range1

        };
        //console.log(rules)
        
    }
    return rules;
    //console.log(lines);
};


const parseB = (section) => {
    const ticketStr = section.split('\n')[1]; //split on new line char and grab the second ele 
    return ticketStr.split(',').map(Number);
};





const parseC = (section) => {
    const lines = section.split('\n').slice(1); //split on the new line char, gives us an array of those strings
    return lines.map(line => line.split(',').map(Number)); //we can split on the ',' to get straight number data in the range hence we use the built in Numbers function

};

solve().then(console.log); //955584


