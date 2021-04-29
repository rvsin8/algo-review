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
    for (i = 1; i < items.length + 1; i++) {
        const currentWeight = items[i - 1][1];
        const currentValue = items[i - 1][0];
        for (let c = 0; c < capacity + 1; c++) {
            if (currentWeight > c) {
                knapsackValues[i][c] = knapsackValues[i - 1][c];
            } else {
                knapsackValues[i][c] = Math.max (
                    knapsackValues[i - 1][c],
                    knapsackValues[i - 1][c - currentWeight] + currentValue,
                );
            }
        }
    }
}