//Disk Stacking 
//Dynamic Programming

//my understanding
//our input contains arrays in which there are subarray containing three numbers
//these integers represent dimensions of the disks, the first integer is the width, second is the depth and the last is the height
//we have to stack up the disks and create the tallest stack we can - if we want to want to put one disk on top of another its width will have to be smaller along with the disk and height
//no turning or rotating disks

//my solution
//[[2,2,1], [2,1,2], [3,2,2], [2,3,4], [4,4,5], [2,2,8]]
//to make it easier to solve it, the first step is to sort the arrays in ascending order by height
//[1,2,3,4,5,8] heights array
//we are progressively going to update this array to see if we get higher heights
//if we look at idx0 [2,2,1] we cannot stack anything on top of it bc it has the lowest height so it stays 1
//at idx1 [2,1,2], the width of it is 2 and the width of the disk below is 2 so we are at 2
//idx2 [3,2,3] and compare it is the array in idx1 3 > 2 width, 2 > 1 and 3 > 2 yes this can be stacked with the array at idx1 but it cannot be stacked on the array of idx0 //update the height to 5 bc the height is 2 + 3
//currentDisk = array[i] for o < i < length
//otherDisk = array[j] for o < j < i
//if w0 < wc and d0 < dc and h0 < hc : height[i] = max heights[i] or hc +heights[j]
//now we are at [2,3,4], this width is less than or equal to all the disks before it so we cannot stack this and 4 is not > 5 so we do not update
//[4,4,5] this can be stacked bc all these values are greater than the previous stacks //at idx1 max height is 6 //at idx2 max height is 7 //at idx3 max height 10 bc 5 + 5 bc the max height at idx2 is 5 bc it can stack on idx1 and this is our answer
//fyi at idx3 max height would be 9 and that is still less than 10


//time complexity
//O(n^2) we iterate through it once when we keep updating our current disk and again to update our other disk

//space complexity 
//O(n) 

function diskStacking(disks) {
    disks.sort((a,b) => a[2] - b[2]);
    const heights = disks.map(disk => disk[2]);
    const sequences = new Array(this.length);
    let maxHeightIdx = 0;
    for (let i = 1; i < disk.length; i++) {
        const currentDisk = disks[i];
        for (let j = 0; j < i; j++) {
            const otherDisk = disks[j];
            if (AreValidDimensions(otherDisk, currentDisk)) {
                if (heights[i] <= currentDisk[2] + height[j]) {
                    heights[i] = currentDisk[2] + height[j];
                    sequences[i] = j;
                }
            }
        }
        if (heights[i] >= heights[maxHeightIdx]) maxHeightIdx = i;
    }
    return buildSequence(disks, sequences, maxHeightIdx);
}

function areValidDimensions(o, c) {
    return o[0] < c[0] && o[1] < c[1] && o[2] < c[2];
}

function buildSequence(array, sequences, currentIdx) {
    const sequence = [];
    while (currentIdx !== undefined) {
        sequence.unshift(array[currentIdx]);
        currentIdx = sequences[currentIdx];
    }
    return sequence;
}