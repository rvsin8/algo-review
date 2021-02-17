//Powerset
//Recursions

//my understandings 
//write a function that takes in a set of elements and wants us to have that function generate the powerset of that set of numbers
//a powerset in match is defined as the set of all subsets
//P([1,2,3]) = [[], [1], [2], [3], [1,2], [1,3], [2,3], [1,2,3]]


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