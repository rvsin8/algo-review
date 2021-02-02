//Single Cycle Check
//Graphs

//my understanding 
//take in a list and return a boolean whether or not that list has a single cycle
//[2,3,1,-4,-4,2], the 2 will bring us to 1 and -4 will bring us to the last 2
//a single cycle means that if we start jump[ing through the array - we will wrap back around to the first num we visited after visiting every num in the array exactly once
//the array above does complete one cycle 
//every num we hit we can just increment - remember we want to hit every num once
//[2,3,1,-4,-4,2] after the first jump from 2 to 1 it would look like [1,0,1,0,0,0] is we increment to a 2 before all are changed from 0 to 1 then we don't have a single cycle so we return false
