const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n\n');
};

const solve = async () => {
    const [sectionA, sectionB, sectionC] = await readLines(); //we want to split it by sections, we will focus on section A and section C
    parseA(sectionA);
   // console.log(sectionC)
}; 

const parseA = (section) => {
    const lines = section.split('\n'); //split on the new line char, gives us an array of those strings
    const rules = {}; //want to make rules revolving around keys / values

    for (let line of lines){ //
        const [ field, rangeStr ] = line.split(':'); //parsing out of data// separate field and the range of numbers to check validity 
        //console.log(rangeStr);
        //console.log(field);

        const [ range1, range2 ] = rangeStr.split(' or '); //will give us our two num since we split on the or
        console.log(range1, range2);
        const numbers = range1.splt('-').map(Number); //we can split on the - to get straight number data in the range hence we use the built in Numbers function
        
    }
    //console.log(lines);

};

solve().then(console.log); //955584


