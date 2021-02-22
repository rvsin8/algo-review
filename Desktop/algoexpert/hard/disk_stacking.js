//Disk Stacking 
//Dynamic Programming

//my understanding


//time complexity
//O(n^2)

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