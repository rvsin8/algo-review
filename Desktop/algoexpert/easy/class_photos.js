//Class Photos
//Greedy Algorithms 

//my understanding
//given two input arrays - height of students wearing a blue shirt and height of students wearing a red shirt
//arrays will be the same length, so same ppl wearing blue or red shirts
//can we take a pic of students with the following constraints 
//all the students wearing red shirts must be in the same row
//all the students wearing blue shirts must be in the same row
//must have exactly two rows
//everyone in the front row must be shorter than those in the back row
//return true if we are able to take a pic accordingly 

//solution 
//red shirts = [5,8,1,3,4]
//blue shirts = [6,9,2,4,5]
//whatever color shirt our tallest student is wearing has to be in the back row
//so blue shirts must be in the back row
//first thing we do is determine which color should be in the front or back via tallest student
//[6,9,2,4,5] - we take the 9 out 
//[5,8,1,3,4] - we take the 8 out and put it in front of the 9 since its the largest num in the red shirt array
//[6,2,4,5] --> 6, is the next tallest in the blue shirt taller than the red shirt ?
//[5,1,3,4] --> 5 yes it is
//and so on
//even if its a tie on height it shall return false

//time complexity 
//O(nlog(n)) //we need to sort the blue shirt and red shirt height 

//space complexity
//O(1) we dont need any auxillary space for this algo bc we can modify the array

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b - a); //sort the red shirt in descending order
    blueShirtHeights.sort((a,b) => b - a); //sort the blue shirts in descending order

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE'; //if red shirt height at idx 0 is less than blue shirt then red shirts will be in the first row, if not it will be blue shirts
    for (let idx = 0; idx < redShirtHeights.length; idx++) { //
        const redShirtHeight = redShirtHeights[idx]; //we will use this to compare students by height and make sure the criteria is met
        const blueShirtHeight = blueShirtHeights[idx]; //reasoning above

        if (shirtColorInFirstRow === 'RED') { //if the red shirts are in our first row
            if (redShirtHeight >= blueShirtHeight) return false; //if any of the red heights are taller than the blue students behind them return false

        } else if (blueShirtHeight >= redShirtHeight) return false; //same goes for blue shirts if they are in the first row
    }

    return true;
}