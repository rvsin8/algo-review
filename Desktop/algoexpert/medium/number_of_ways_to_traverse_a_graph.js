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
//base case is if the height or width is equal to 1, that means theres only 1 way to get to the end
//we need the number of ways to get to each square 
//6 + 4 = 10
//recursive --> time is O)2^(n + m) n is the width and m is the height, we make 2 recursive calls one up and one left and space is O(n + m) bc we will reach a base case after n + m calls, we will go all the way until we hit a base case, we will never have more than the height of the recursive stack

//more optimal solution via dynamic programming
//in this solution we will start at the start pos
//fill in the border the bottom and right border
//have j and i pointers for this, j goes downwards and i goes to the right 
//when we hit a border we know it will always be equal to 1
//we traverse down first via j pointer and then right via i pointer and go down via j pointer
//now we calc the left and up values to get the ways on each squares 

//time complexity 
//O(n * m) we have to do n times m operations, thats how many times we need to loop

//space complexity 
//O(n * m) we need to use a ds that will store our intermediate values 

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

//dynamic programming solution and the correct one to do
function numberOfWaysToTraverseGraph(width, height) {
    const numberOfWays = [];
    for (let i = 0; i < height + 1; i++) {
        numberOfWays.push([]);
        for (let j = 0; j < width + 1; j++) {
            numberOfWays[i].push(0);
        }
    }

    for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) {
        for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) {
            if (widthIdx === 1 || heightIdx === 1) {
                numberOfWays[heightIdx][widthIdx] = 1;
            } else {
                const waysLeft = numberOfWays[heightIdx][widthIdx - 1];
                const waysUp = numberOfWays[heightIdx - 1][widthIdx];
                numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp;
            }
        }
    }

    return numberOfWays[height][width];

}
