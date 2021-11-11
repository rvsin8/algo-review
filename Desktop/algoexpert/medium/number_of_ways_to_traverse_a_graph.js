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

//trick solution 
//permutation - unique ordering of ele in a set
//{1,3,4} --> [1,3,4] [1,4,3] [3,4,1]
//total permutation is the num of ways you get unique orderings 
//right movement = width - 1 so 3
//down movement = height - 1 so 2
//{R,R,R,D,D} --> IN ANY ORDER THIS WILL GET US THE SOLUTION
//formula (R + D)! / R! * D! is equal to the num of permutations that is unique in this set
//(3 + 2)! / 3! * 2!
//so 3! is basically 3 * 2 * 1
//5! / 3! * 2! --> 120 / (6 * 2) --> 120 / 12 --> 10
//O(n + m) time bc we need a factorial for n + m
//O(1) space we store nothing bc its an equation


//time complexity 
//O(n * m) we have to do n times m operations, thats how many times we need to loop

//space complexity 
//O(n * m) we need to use a ds that will store our intermediate values 

//trick solution 
function numberOfWaysToTraverseGraph(width, height) {
    const xDistanceToCorner = width - 1; //num of times we need to move right
    const yDistanceToCorner = height - 1; //num of times we need to move down

    const numerator = factorial(xDistanceToCorner + yDistanceToCorner); //get the numerator of the equation which is factorial of x + y distance
    const denominator = factorial(xDistanceToCorner) * factorial(yDistanceToCorner); //denominators of equation is x! + y !
    return Math.floor(numerator / denominator); //evaluate 

}

function factorial(num) { //define factorial
    let result = 1; //we use 1 as the value to manipulate 

    for (let n = 2; n < num + 1; n++) { //we start from 2 and iterate 
        result *= n;//get the factorial which is like 3! = 3 * 2 * 1
    }

    return result; //get the result of that factorial which is 6
}

//dynamic programming solution and the correct one to do
function numberOfWaysToTraverseGraph(width, height) {
    const numberOfWays = []; //list comprehension  and creates a 2D grid
    for (let i = 0; i < height + 1; i++) { //range and plus 1 is to include the width
        numberOfWays.push([]); //why
        for (let j = 0; j < width + 1; j++) { //iterate down
            numberOfWays[i].push(0); //why ?
        }
    }

    for (let widthIdx = 1; widthIdx < width + 1; widthIdx++) { //go through col 
        for (let heightIdx = 1; heightIdx < height + 1; heightIdx++) { //go through the row
            if (widthIdx === 1 || heightIdx === 1) { //for the borders 
                numberOfWays[heightIdx][widthIdx] = 1;//is 1
            } else { //if not on the border
                const waysLeft = numberOfWays[heightIdx][widthIdx - 1]; //we want left idx
                const waysUp = numberOfWays[heightIdx - 1][widthIdx]; //we want up idx
                numberOfWays[heightIdx][widthIdx] = waysLeft + waysUp; // we want to get the sum of left and above for each square
            }
        }
    }

    return numberOfWays[height][width]; //return the num of ways in the height and width

}
