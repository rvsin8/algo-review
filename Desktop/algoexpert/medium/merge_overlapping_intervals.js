//Merge Overlapping Intervals
//Arrays

//my understanding
//you have to take in two non empty arrays
//each array represents an interval that contains 2 values
//start of the interval and the end of the interval 
//if they overlap then we merge
//[1,4] [5,8] ---> [1,8]
//[2,6] [6,8] --> [2,8]
//interval overlap when the end of one interval is greater than or equal to the start of one interval if SORTED
//the first thing we will do is sort the input in order of increasing starting value 
//append an interval and keep track of it as a reference, then traverse the intervals and compare them to our reference interval
//if no overlap we change our reference and do this again 
//if there is an interval. we will merge these intervals by updating the ending values

//time complexity 
//O(nlog(n)) bc we originally sort the array

//space complexity 
//O(n) bc we store the merged intervals in a new array

function mergeOverlappingIntervals(intervals) {
    const sortedIntervals = intervals.sort((a,b) => a[0] - b[0]); //sort the input 

    const mergedIntervals = []; //new array where we add merged intervals
    let currentInterval = sortedIntervals[0]; //we keep track of our first interval
    mergedIntervals.push(currentInterval); //we add our first interval to our merged array and use it as a reference

    for (const nextInterval of sortedIntervals) { //for next interval
        const [_, currentIntervalEnd] = currentInterval; //
        const [nextIntervalStart, nextIntervalEnd] = nextInterval; //

        if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd); //if there is an overlap we find the max of the two intervals
        else {
            currentInterval = nextInterval; //update our interval
            mergedIntervals.push(currentInterval); //and push it in to our array
        }
    }
    return mergedIntervals; //return our final array


}