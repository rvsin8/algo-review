const fs = require('fs').promises;

const readEntries = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n\n');
};

const solve = async () => {
    const groups = await readEntries(); 
    for (let group of groups) { //iterate through the group
        const lines = group.split('\n'); //split on the new line char
        let unionSet = new Set(); //set the union set into an empty set
        for (let line of lines) { //iterate through the line in a group
                const lineSet = new Set(line); //union this line set to the union set
        }


    }
};


const union = (set1, set2) => {
    const newSet = new Set(); //return a new set that equals an empty set
    for (let item of set1) { //iterate through the first set and add items
        newSet.add(item);
    }

        for (let item of set2) { //iterate through second set and add items
        newSet.add(item);
    }

    return newSet;
};

const s1 = new Set('xyz');
const s2 = new Set('yzw');
console.log(union(s1, s2)); //

//solve().then(console.log);