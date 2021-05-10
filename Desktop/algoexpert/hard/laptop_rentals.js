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
//[0,2] overlaps with [1,4] so we need two laptops 
//[4,6], [0,4] we need three laptops because there is a 3 array overlap
//[7,8], [9,11] and [3,10] we still only require three laptops

//solving the problem via solution 1
//use sorting and heap data structure 
//sort by starting time --> [[0,2],[0,4],[1,4],[3,10],[4,6],[7,8],[9,11]]
//laptops = 1 we need atleast one laptop
//after we visit [0,2] and [0,4] we need laptops = 2
//after [0,2], [0,4] and [1,4] we need laqptops = 3
//after [3,10] we need laptops = 3 bc one time period is gone but another starts 
//so on, we always compare start time to every other runnign end time
//this requires n^2 time complexity but with min heap it will be reduced
//via min heap we can just hand over the laptops not in use
//min heap will tell us which range has the least time
//it will keep track by end time
//if the end time is <= the start time, if it is not we need another laptop
//so we add [0,4] to the min heap that already has [0,2]
//same goes for [1,4]
//once we hit [3,10] we can remove [0,2] from the min heap since the time has expired and add [3,10]
//so on

//time complexity 
//O(nlog(n)) whenever we insert and remove it is log n
//we are also sorting which is n log n

//space complexity 
//O(n) we can be storing at most n time ranges

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