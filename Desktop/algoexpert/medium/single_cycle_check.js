//Single Cycle Check
//Graphs

//my understanding 
//take in a list and return a boolean whether or not that list has a single cycle
//[2,3,1,-4,-4,2], the 2 will bring us to 1 and -4 will bring us to the last 2
//a single cycle means that if we start jump[ing through the array - we will wrap back around to the first num we visited after visiting every num in the array exactly once
//the array above does complete one cycle 
//every num we hit we can just increment - remember we want to hit every num once
//[2,3,1,-4,-4,2] after the first jump from 2 to 1 it would look like [1,0,1,0,0,0] is we increment to a 2 before all are changed from 0 to 1 then we don't have a single cycle so we return false
//we have n elements in our example it is 6
//if we have n=6 ele and m is < 6 when we return to our first ele then return false
//once we have jumped through six elements, we need the ele after our final element to be our first cycle
//three conditions 
//1. lets make sure we visit n elements 
//2. if at any point in time, we visited more than one ele we are past the starting point and we come back to our starting point without hitting n ele then we have a problem --> 6 > n > 1
//3. when we get to a point where n = 6, if we are not back to our starting point we got a problem

//time complexity 
//O(n) - where n is the length of the input array, we are jumping through n elements 

//space complexity
//O(1) - we do not need an extra list just a few var to keep track

function hasSingleCycle(array){
    let numElementsVisited = 0;//we want o visit n elements, so we want to keep track of the ele visited
    let currentIdx = 0;//we want to keep track of our index
    while (numElementsVisited < array.length) { //while loop so much that the ele visited is smaller than the array itself 
        numElementsVisited++; //increment like i said before 
        currentIdx = getNextIdx(currentIdx, array); //jump through our ele, we will update our idx via helper method
    }
    return currentIdx === 0; //return this when we are done, if it equals 0 and this will be true and we got a single cycle
}

function getNextIdx(currentIdx, array){ //helper method
    const jump = array[currentIdx]; //the value is - will be w.e the vale is at the current idx
    const nextIdx = (currentIdx + jump) % array.length; //next idx is current dx + jump but we module it by the array so it does not exceed bounds
    return nextIdx >= 0 ? nextIdx : nextIdx + array.length; //return nextidx if it is a pos or 0 num, otherwise  do nextidx + array length bc it is the same as moving forward as being neg //this is confusing re-read this
}

//neg and pos num confuse me