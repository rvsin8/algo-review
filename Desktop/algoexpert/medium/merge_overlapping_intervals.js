//Merge Overlapping Intervals
//Arrays

//my understanding
//you have to take in two non empty arrays
//each array represents an interval that contains 2 values
//start of the interval and the end of the interval

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