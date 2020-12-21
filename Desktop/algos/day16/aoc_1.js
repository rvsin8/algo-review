As you're walking to yet another connecting flight, you realize that one of the legs of your re-routed trip coming up is on a high-speed train. However, the train ticket you were given is in a language you don't understand. You should probably figure out what it says before you get to the train station after the next flight.

Unfortunately, you can't actually read the words on the ticket. You can, however, read the numbers, and so you figure out the fields these tickets must have and the valid ranges for values in those fields.

You collect the rules for ticket fields, the numbers on your ticket, and the numbers on other nearby tickets for the same train service (via the airport security cameras) together into a single document you can reference (your puzzle input).

The rules for ticket fields specify a list of fields that exist somewhere on the ticket and the valid ranges of values for each field. For example, a rule like class: 1-3 or 5-7 means that one of the fields in every ticket is named class and can be any value in the ranges 1-3 or 5-7 (inclusive, such that 3 and 5 are both valid in this field, but 4 is not).

Each ticket is represented by a single line of comma-separated values. The values are the numbers on the ticket in the order they appear; every ticket has the same format. For example, consider this ticket:

.--------------------------------------------------------.
| ????: 101    ?????: 102   ??????????: 103     ???: 104 |
|                                                        |
| ??: 301  ??: 302             ???????: 303      ??????? |
| ??: 401  ??: 402           ???? ????: 403    ????????? |
'--------------------------------------------------------'
Here, ? represents text in a language you don't understand. This ticket might be represented as 101,102,103,104,301,302,303,401,402,403; of course, the actual train tickets you're looking at are much more complicated. In any case, you've extracted just the numbers in such a way that the first number is always the same specific field, the second number is always a different specific field, and so on - you just don't know what each position actually means!

Start by determining which tickets are completely invalid; these are tickets that contain values which aren't valid for any field. Ignore your ticket for now.

For example, suppose you have the following notes:

class: 1-3 or 5-7
row: 6-11 or 33-44
seat: 13-40 or 45-50

your ticket:
7,1,14

nearby tickets:
7,3,47
40,4,50
55,2,20
38,6,12
It doesn't matter which position corresponds to which field; you can identify invalid nearby tickets by considering only whether tickets contain values that are not valid for any field. In this example, the values on the first nearby ticket are all valid for at least one field. This is not true of the other three nearby tickets: the values 4, 55, and 12 are are not valid for any field. Adding together all of the invalid values produces your ticket scanning error rate: 4 + 55 + 12 = 71.

Consider the validity of the nearby tickets you scanned. What is your ticket scanning error rate?

Your puzzle answer was 20013.

The first half of this puzzle is complete! It provides one gold star: *




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

    let errorTotal = 0; //we want to add to this value, we begin at 0
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


