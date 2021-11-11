//Four Number Sum
//Arrays

//my understanding 
//you get an array of distinct integers and a target number
//wants us ti implement a function that will give us all the four numbers that will give us the target number
//brute force is bad for time complexity
//a quadruplet can be expressed as a pair of numbers
//x,y,z,k can be a quadruplet we can make this into pairs x + y = p ; z + k = q
//we can reduce this to a variation of the two sum problem 
//keep track of what numbers were used to find these big number sum
//{P: [x,y]}
//{6: [[4,2],[7,-1]}
//{13: [[7,6]] 3: [[4,-1]] 10: [[6,4]] 6: [[4,2],[7,-1]]}
//we want to avoid double counting
//one four loop, two inner for loops to avoid double counting 
//P = 4 + -1, 4 + 1, 4 + 2
//Q = 7 + 4, 6 + 4 
//iterate through the array once
//the first pass will not generate anything
//we iterate before 6, 6 + 7 = 13 and we add this to the hash table
//{13: [[7,6]]}
//we iterate through 4, P = 4 - 1 = 3 // 16 - 3 = 13
//13 is in our hash table
//[[7,6,4,-1]] our first quadruplet found
//so on
//iterate through all the nums before 4
//{13: [[7,6]] 11: [[7,4]] 10: [[6,4]]
//we keep doing this until we find our second quadruplet --> [7,6,1,2]

//time complexity 
//O(n^2) avg where n is the length of our input array we use two for loops
//O(n^3) worst in an edge case scenario 

//space complexity 
//O(n^2) avg / worst due to the hash table, we are storing roughly O N^2 sums

function fourNumberSum(array, targetSum) {
    const allPairSums = {}; //hash table that stores every sum in the array
    const quadruplets = []; //hold every sinlge quadruplet that gives us our target sum
    for (let i = 1; i < array.length - 1; i++) { //outer for loop
        for (let j = i + 1; j < array.length; j++) { //inner for loop
            const currentSum = array[i] + array[j]; //get our pair
            const difference = targetSum - currentSum; //get our difference
            if (difference in allPairSums) { //if the difference is in our hash table
                for (const pair of allPairSums[difference]) { //iterate through all the pairs
                    quadruplets.push(pair.concat([array[i], array[j]])); //add our new pairs
                }
            }
        }
        for (let k = 0; k < i; k++) { //second for loop
            const currentSum = array[i] + array[k]; //current sum is array at idx i and k
            if (!(currentSum in allPairSums)) { //if the current sum in all pair sums
                allPairSums[currentSum] = [[array[k], array[i]]]; // create an entirely new k-v pairs
            } else { //if not, otherwise
                allPairSums[currentSum].push([array[k], array[i]]); //we can append our new array to the existing value
            }

        }
    }
    return quadruplets; //return the quadruplets
}

