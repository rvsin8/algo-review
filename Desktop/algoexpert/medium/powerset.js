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
//O(n*2^n)

//space complexity
//O(n*2^n)

function powerset(array, idx = null) {
    if (idx === null) {
        idx = array.length - 1;
    }

    if (idx < 0) {
        return [[]];
    }

    const ele = array[idx];
    const subsets = powerset(array, idx - 1);
    const length = subsets.length; 
    for (let i = 0; i < length; i++) {
        const currentSubset = subsets[i];
        subsets.push(currentSubset.concat(ele));
    }
    return subsets;
}