//Laptop Rentals
//Heaps

//my understanding 
//one input that is an array and inside of it is more arrays with pairs of integers 
//first ele is the start time
//second ele is the end time
//0 <= start < end
//how many laptops does the school requires such that every student has access to a laptop at any given time
//a student has access to only one laptop 
//[0,2][2,3]
//one student wants the laptop from 0-2
//another student wants the laptop from 2-3
//the bounds here can overlap

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