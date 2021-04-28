//Merge Overlapping Intervals
//Arrays

//my understanding

//time complexity 

//space complexity 

function mergeOverlappingIntervals(intervals) {
    const sortedIntervals = intervals.sort((a,b) => a[0] - b[0]);

    const mergedIntervals = [];
    let currentInterval = sortedIntervals[0];
    mergedIntervals.push(currentInterval);

    for (const nextInterval of sortedIntervals) {
        const [_, currentIntervalEnd] = currentInterval;
        const [nextIntervalStart, nextIntervalEnd] = nextInterval;
    }

}