//Number of Ways to Traverse Graph 
//Dynamic Programming 

//my understanding 
//we are given two inputs a height and a width and these will be positive non-zero integers 
//top left is starting pos and bottom right is our ending position and we must see how many traverses it takes to go from the start to bottom
//can only go right and down 
//cannot go up or left 
//return the num of ways when you can go to the end
//width will have to be always at least 2
//width of 4 and height of 3 can be done 1o ways 

//my solution 
//many diff ways to solve this
//you can do it recursive, trick and dynamic programming 
//recursive way --> if we can find the num of ways to get to the position to the left or above the end point we essentially have figured this out
//sum the top and left of each position to see how to get to each square left or above the end
//

//time complexity 
//O(n + m)

//space complexity 
//O(1)

//trick solution 
function numberOfWaysToTraverseGraph(width, height) {
    const xDistanceToCorner = width - 1;
    const yDistanceToCorner = height - 1;

    const numerator = factorial(xDistanceToCorner + yDistanceToCorner);
    const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner);
    return Math.floor(numerator / denominator);

}

function factorial(num) {
    let result = 1;

    for (let n = 2; n < num + 1; n++) {
        result *= n;
    }

    return result;
}
