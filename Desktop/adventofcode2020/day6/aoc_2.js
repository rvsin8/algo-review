--- Part Two ---
As you finish the last group's customs declaration, you notice that you misread one word in the instructions:

You don't need to identify the questions to which anyone answered "yes"; you need to identify the questions to which everyone answered "yes"!

Using the same example as above:

abc

a
b
c

ab
ac

a
a
a
a

b
This list represents answers from five groups:

In the first group, everyone (all 1 person) answered "yes" to 3 questions: a, b, and c.
In the second group, there is no question to which everyone answered "yes".
In the third group, everyone answered yes to only 1 question, a. Since some people did not answer "yes" to b or c, they don't count.
In the fourth group, everyone answered yes to only 1 question, a.
In the fifth group, everyone (all 1 person) answered "yes" to 1 question, b.
In this example, the sum of these counts is 3 + 0 + 1 + 1 + 1 = 6.

For each group, count the number of questions to which everyone answered "yes". What is the sum of those counts?

Your puzzle answer was 3052.


const fs = require('fs').promises;

const readEntries = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n\n');
};

const solve = async () => {
    const groups = await readEntries();
    let total = 0; 
    for (let group of groups) { //iterate through the group
        const lines = group.split('\n'); //split on the new line char
        let intersectionSet = new Set(lines[0]); //set the union set into an empty set, if we start wit no items in this - we will always get 0 so set it to the first line bc every group will have a line to it
        for (let line of lines) { //iterate through the line in a group
            const lineSet = new Set(line); //union this line set to the union set
            intersectionSet = intersection(intersectionSet, lineSet); //union both
        }

        total += intersectionSet.size; //we find the size of the union 
    }
    return total;
};


const intersection = (set1, set2) => { //helper method
    const newSet = new Set(); //set newSet into an empty set first

    for(let item of set1) { //iterate through the first set
        if (set2.has(item)) { //if set2 has that item
            newSet.add(item); //add that item to newSet

        }

    }
    return newSet; //return that same item

}

const s1 = new Set('aple');
const s2 = new Set('pol');
console.log(intersection(s1, s2));





solve().then(console.log);