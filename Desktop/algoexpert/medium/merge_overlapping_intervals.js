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
//O(nlog(n))

//space complexity 
//O(n)

function mergeOverlappingIntervals(intervals) {
    const sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currentInterval = sortedIntervals[0];
    mergedIntervals.push(currentInterval);

    for (const nextInterval of sortedIntervals) {
        const [_, currentIntervalEnd] = currentInterval;
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;

        if (currentIntervalEnd >= nextIntervalStart) currentInterval[1] = Math.max(currentIntervalEnd, nextIntervalEnd);
        else {
            currentInterval = nextInterval;
            mergedIntervals.push(currentInterval);
        }
    }
    return mergedIntervals;


}