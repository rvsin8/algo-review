//Number of Ways to Traverse Graph 
//Dynamic Programming 

//my understanding 

//time complexity 
//O(n + m)

//space complexity 
//O(1)

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
