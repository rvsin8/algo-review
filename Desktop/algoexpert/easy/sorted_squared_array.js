//Sorted Squared Array
//Arrays

//my understandings 

//time complexity 
//O(nlogn)

//space complexity 
//O(n)

function sortedSquaredArray(array) {
    const sortedSquares = new Array(array.length).fill(0);

    for (let idx = 0; idx < array.length; idx++) {
        const value = array[idx];
        sortedSquares[idx] = value * value;
    }
}

