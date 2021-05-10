//Laptop Rentals
//Heaps

//my understanding 

//time complexity 
//O(nlog(n))

//space complexity 
//O(n)

function laptopRentals(times) {
    if (times.length === 0) return 0;

    let usedLaptops = 0;
    const startTimes = times.map(a => a[0].sort((a,b) => a - b));
    const endTimes = times.map(a => a[1].sort((a,b) => a - b));

    let startIterator = 0;
    let endIterator = 0;

    while (startIterator < times.length) {
        if (startTimes[startIterator] >= endTimes[endIterator]) {
            usedLaptops--;
            endIterator++;
        }

        usedLaptops++;
        startIterator++;
    } 
    return usedLaptops;
}