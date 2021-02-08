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
//we should not execute the largest query first
//if we put the list in sorted order then it would be [1,2,2,3,6] --> 17 which is the answer

//time complexity 
//O(nlogn)

//space complexity 
//O(1)


function minimumWaitingTime(queries) {
    queries.sort((a,b) => a - b);

    let totalWaitingTime = 0;
    for (let idx = 0; idx < queries.length; idx++){
        const duration = queries[idx];
        const queriesLeft = queries.length - (idx + 1);
        totalWaitingTime += duration * queriesLeft;
    }
    return totalWaitingTime;
}