//Powerset
//Recursions

//my understandings 
//write a function that takes in a set of elements and wants us to have that function generate the powerset of that set of numbers
//a powerset in match is defined as the set of all subsets
//P([1,2,3]) = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]
//we don't care about the order --> [1,2] and [2,1] are the sames

//iterative solution
//you can immediately put in an empty set
//you can loop through your array of nums and start generating new sets 
//we start at 1 so we can create [1], we added to the emoty subset
//we move to 2 so we can create [2] and [1,2] we added to the empty subset and the subset wt 1 in it
//we move to 3 so we create [3], [1,3], [2,3], [1,2,3], we added to the empty subset and the subset wt 1 in it, the subset 2 in it, the subset with 1 and 2 in it

//time complexity
//O(n*2^n) how many subsets am i going to have ? there are 2^m subset, we are doubling subsets every time we iterate through and the subset is length n

//space complexity
//O(n*2^n) is the same exact as time bc we are storing 2^n subsets and we have n / 2 elements 

//recursive solution
function powerset(array, idx = null) {
    if (idx === null) { //if the idx is none, 
        idx = array.length - 1; //idx will equal to the length of the array - 1
    }

    if (idx < 0) { //if the array is empty we return an empty set
        return [[]]; //empty set
    }

    const ele = array[idx]; //keep track of the ele
    const subsets = powerset(array, idx - 1); //declare the subsets
    const length = subsets.length; //keep track of the length of the array
    for (let i = 0; i < length; i++) { //in range
        const currentSubset = subsets[i]; //current subset will equal subsets of i
        subsets.push(currentSubset.concat(ele)); //generate a new subset that is composed of the current subset
    }
    return subsets;
}