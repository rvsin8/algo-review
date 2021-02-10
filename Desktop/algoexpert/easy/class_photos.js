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


//time complexity 
//O(nlog(n))

//space complexity
//O(1)

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b - a);
    blueShirtHeights.sort((a,b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
    for (let idx = 0; idx < redShirtHeights.length; idx++) {
        const redShirtHeights = redShirtHeights[idx];
        const blueShirtHeights = blueShirtHeights[idx];

        if (shirtColorInFirstRow === 'RED') {
            if (redShirtHeights >= blueShirtHeights) return false;

        } else if (blueShirtHeights >= redShirtHeights) return false;
    }

    return true;
}