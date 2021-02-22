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
        
    }
}