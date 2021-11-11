//Knapsack Problem
//Dynamic Programming

//my understanding
//very famous problem
//youre given an array of arrays
//each subarray represents a item
//each value represents the max capacity of the knapsack we have
//the second represents the weight of a given problem and the first value represents the monetary value
//find the items that you have ti put in your bag to maximize its value without exceeding the capacity
//[[1,2][4,3][5,6][6,7]] --> 10
//build a 2D array and it will hold the greatest values we can put in a knapsack with specific restrictions
//2D array called values, w is weight and d is dollars
//vales[i][j], where i and j are the rows and columns --> values[i][j] = max {values[i-1][j]; values[i-1][j-w] + value}, we pick the max of these two things
//if two values equal to each other deep in the subarray we need to back track bc we want the min capacity for max value

//time complexity
//O(nc) where n and c are rows and columns or items and capacity with a constant time operation

//space complexity
//O(nc) because we are building a 2D array

function knapsackProblem(items, capacity) {
  const knapsackValues = []; //building our 2D array
  for (let i = 0; i < items.length + 1; i++) {
    //top row
    const row = new Array(capacity + 1).fill(0); //fill rows with 0
    knapsackValues.push(row); //
  }
  for (i = 1; i < items.length + 1; i++) {
    //for loop
    const currentWeight = items[i - 1][1]; //we have that first row with no items
    const currentValue = items[i - 1][0]; //first value
    for (let c = 0; c < capacity + 1; c++) {
      //for capacity
      if (currentWeight > c) {
        //is the current weight greater than c, cannot fit
        knapsackValues[i][c] = knapsackValues[i - 1][c];
      } else {
        knapsackValues[i][c] = Math.max(
          //if we can fit, it will the max of
          knapsackValues[i - 1][c], //previous item
          knapsackValues[i - 1][c - currentWeight] + currentValue //not adding the current item or adding the item
        );
      }
    }
  }
  return [
    knapsackValues[items.length][capacity],
    getKnapsackItems(knapsackValues, items),
  ]; //answer with helper function
}

function getKnapsackItems(knapsackValues, items) {
  //helper
  const sequence = []; //empty array
  let i = knapsackValues.length - 1; //current index
  let c = knapsackValues[0].length - 1; //capacity index
  while (i > 0) {
    //while i is greater than 0, not in the first row
    if (knapsackValues[i][c] === knapsackValues[i - 1][c]) {
      //if the knap value at the current indices is equal to the previous row of the same capacity
      i -= 1; //we update i, we move up the row
    } else {
      sequence.unshift(i - 1); //we can append to our sequence, i-1 bc we have an additional row
      c -= items[i - 1][1]; //update our capacity
      i -= 1; //update
    }
    if (c === 0) break; //if we ever get to the first column then break
  }
  return sequence; //return our sequence
}
