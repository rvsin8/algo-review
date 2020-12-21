const fs = require('fs').promises;

const readLines = async () => {
  const data = await fs.readFile('./input', {encoding: 'utf-8'});
  return data.split('\n\n');
};


//via stack overflow - The flat method is not yet implemented in common browsers (only Chrome v69, Firefox Nightly and Opera 56). It’s an experimental feature. Therefore you cannot use it yet.

//You may want to have your own flat function instead:


Object.defineProperty(Array.prototype, 'flat', { //flat wasn't working so i had to google and create my own flat function,
    value: function(depth = 1) {
      return this.reduce(function (flat, toFlatten) {
        return flat.concat((Array.isArray(toFlatten) && (depth>1)) ? toFlatten.flat(depth-1) : toFlatten);
      }, []);
    }
});

const solve = async () => {
    const [sectionA, sectionB, sectionC] = await readLines(); //we want to split it by sections, we will focus on section A and section C
    const rules = parseA(sectionA);
    const nearbyTickets = parseC((sectionC));
    //console.log(nearbyTicket);
    const allRules = Object.values(rules); //convert all of your rules, rules are the object and keys are the function

    const values = nearbyTickets.flat(); //will convert 2D arrays into regular arrays

    for (let val of values){ //for all the values in the value array we want to check which follow the rules
        const isInvalid = allRules.every(rule => rule(val) === false); //if that value is invalid
        if (isInvalid) //if a value is invalid
            errorTotal += val; //add it to the total

    }

    return errorTotal



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

const parseC = (section) => {
    const lines = section.split('\n').slice(1); //split on the new line char, gives us an array of those strings
    return lines.map(line => line.split(',').map(Number)); //we can split on the ',' to get straight number data in the range hence we use the built in Numbers function

};

solve().then(console.log); //955584


