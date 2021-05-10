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

//solution 2 our solution
//give a list of start times and list of end times and then sort it
//start = [0,0,1,3,4,7,9]
//end = [2,4,4,6,8,10,11]
//get two pointers --> i and j
//we can see three rentals start before one ends 
//loop through all of our times, we compare i and j
//if the ending time is before or equal to the starting time at then we free up a laptop
//laptops = 1
//we see that another one has start so now our laptop is at 2
//we see that another has started so our laptop rentla is at 3
//when we see an ending time equal or less than a starting time of another laptop, the laptop can take another laptop that was in use
//

//time complexity 
//O(nlog(n)) whenever we insert and remove it is log n
//we are also sorting which is n log n

//space complexity 
//O(n) we can be storing at most n time ranges

function laptopRentals(times) {
    if (times.length === 0) return 0; //if our input is = 0, then return 0

    let usedLaptops = 0; //we start with 0 laptops being rented
    const startTimes = times.map(a => a[0].sort((a,b) => a - b)); //sort it in ascending order
    const endTimes = times.map(a => a[1].sort((a,b) => a - b)); //sort it in ascending order

    let startIterator = 0; //pointer 1
    let endIterator = 0; //pointer 2

    while (startIterator < times.length) { //if our pointers do not overlap
        if (startTimes[startIterator] >= endTimes[endIterator]) { //if the start time is greater than or equal to one of the end times im on
            usedLaptops--; //subtract 1 from usedlaptop 
            endIterator++; //keep iterating
        }

        usedLaptops++; //else we add to laptop rentals
        startIterator++; //keep iterating
    } 
    return usedLaptops; //return the used laptop solution
}