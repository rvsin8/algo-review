//Class Photos
//Greedy Algorithms 

//my understanding


//time complexity 
//O(nlog(n))

//space complexity
//O(1)

function classPhotos(redShirtHeights, blueShirtHeights) {
    redShirtHeights.sort((a,b) => b - a);
    blueShirtHeights.sort((a,b) => b - a);

    const shirtColorInFirstRow = redShirtHeights[0] < blueShirtHeights[0] ? 'RED' : 'BLUE';
    
}