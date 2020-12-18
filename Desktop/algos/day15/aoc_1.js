const solve = (startingSeq, n) => { //take in our starting sequence and n as in the nth number of the seq
    const history = new Map(); //good for a lot of keys
    let last = null; 
    for (let i = 0 ; i < startingSeq.length; i += 1){ //iterate through my starting sequence 
        const num = startingSeq[i]; //make the actual ele a key at the starting seq
        history.set(num, [i]); //add this to the history //i is the position where it was found
        last = num; // let  num continuous being reassigned 
    }

    let count = startingSeq.length; //set count equal the the starting seq length 
    while (count < n) { //while the count is less than n
        const positions = history.get(last); //in the history map get the entry for the last num, it can be one or two ele long 
        if (positions.length === 1){ //if th array is length of 1
            const zeroPositions = history.get(0); //save it as a const zero position, //update the history for zero at index 0 and push into it a new position, we need our history with a fixed length
            zeroPositions.push(count);
            if (zeroPositions.length > 2) //if its more than 2 we need to trim
                zeroPositions.shift(); //trim using shift

            last = 0;

        } else { //means the history contains 2 things
            const [a, b] = positions; //grab a and b
            const newNum = b - a; //newNum is the difference between a and b
            if (history.has(newNum)) { //if its in the history
                const newNumPositions = history.get(newNum); //get that num already in the history
                newNumPositions.push(count); //
                if (newNumPositions.length > 2) //if its more than 2 we need to trim
                    newNumPositions.shift(); //trim using shift

            } else { //if we haven't seen it before
            history.set(newNum, [ count ]); //count represents the position of the num in the sequence

            }

            last = newNum;


        }
        count += 1;//always 
    }
    return last;

};

console.log(solve([0,3,6], 9)); // 4
console.log(solve([0,3,6], 10)); // 0
console.log(solve([5,2,8,16,18,0,1], 2020)); // 421
console.log(solve([5,2,8,16,18,0,1], 30000000)); // 421