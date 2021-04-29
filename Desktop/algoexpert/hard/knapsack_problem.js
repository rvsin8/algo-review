//Knapsack Problem 
//Dynamic Programming

//my understandings 

//time complexity
//O(nc)

//space complexity 
//O(nc)

function knapsackProblem(items, capacity) {
    const knapsackValues = [];
    for (let i = 0; i < items.length + 1; i++) {
        const row = new Array(capacity + 1).fill(0);
        knapsackValues.push(row);
    }
}