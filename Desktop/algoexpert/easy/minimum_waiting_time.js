//Minimum Waiting Time
//Greedy Algorithms

//my understanding
//we have an input array with positive values with at least one integer
//we need to minimize the waiting time for a query
//a waiting time is how long a query must wait to execute 
//[3,2,1,2,6]
//[6,1,2,2,3] - query1 = 0 , query2 = 6, query3 = 6 + 1 = 7, query4 = 6 + 1 + 2 = 9, query5 = 11 --> 11 + 9 + 6 + 7 = 33 not the answer is 17
//find a better order to find minimum waiting time
//the minimum length we are given is 1
//we should not execute the largest query first, we want to put it in the end
//if we put the list in sorted order then it would be [1,2,2,3,6] --> 17 which is the answer
//we are allowed to mutate this array meaning we can sort it in space
//sort input array
//[1,2,2,3,6]
//at 1 total is 4
//at 2 total 3 * 2 = 6 + 4 = 10
//at 2 again, total = 2 * 2 = 4 + 10 = 14
//at 3, total 3 + 14 = 17. 
//total is 17.

//time complexity 
//O(nlogn) where n is the num of queries or length of the input array
//the first step is to sort the input array so this is the fastest way to do it

//space complexity 
//O(1) //we are not storing anything


function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b); //sort it in place in ascending order

    let totalWaitingTime = 0; //define totalwaitingtime to 0, we will keep track of the total
    for (let idx = 0; idx < queries.length; idx++){ //traverse through the query
        const duration = queries[idx];
        const queriesLeft = queries.length - (idx + 1); //the +1 accounts for the first idx // a little confused here
        totalWaitingTime += duration * queriesLeft; //multiple the current duration by the num of queries left and add that to the total waiting time
    }
    return totalWaitingTime; 
}