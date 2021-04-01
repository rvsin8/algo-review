//Interweaving Strings
//Recursion

//my understanding
//we get three strings and we need to write a function whether the first two strings can be interwoven to be the third string
//edge case --> cancatonate which is also interweaving 
//grab the first and second string and put them one top of each other
//declare variables, two pointers that iterate through string 1 and string 2 to see if any letter is in the third string 
//figure out which string starts the third string off
//if one of the letter is equal to the letters in the third string is when recursion can occur
//after the first string does make sense, we go backwards and try the second string
//this is mad confusing 
//we should use caches so we can improve the time complexity and space complexity bc without caching it is 2^(N+M), n is the length with the first string and m is the length of second string  //its 2^ bc we always have two paths 
//space complexity is O(n+m) at most you will have n + m calls 

//time complexity
//O(nm) a cache will lead to this

//space complexity 
//O(nm) a cache will lead to this

function interweavingStrings(one, two, three) {
    if (three.length !== one.length + two.length) {
        return false;
    }

    const cache = new Array(one.length + 1).fill(0).map(_ => new Array(two.length + 1).fill(null));
    return areInterwoven(one, two, three, 0, 0, cache);
}

function areInterwoven(one, two, three, i, j, cache) { //helper method
    if (cache[i][j] !== null) return cache[i][j];

    const k = i + j; //k is the position we are at in the third string
    if (k === three.length) return true; //base case, we are done we have effectively brought i and j to their respective strings

    if (i < one.length && one[i] === three[k]) {  //do a recursive call
        cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache); //if we are interwoven
        if (cache[i][j]) return true; //return true
    }

    if (j < two.length && two[j] === three[k]) { //do a recursive call
        cache[i][j] = areInterwoven(one, two, three, i, j+1, cache); //if not interwoven we try the second cache
        return cache[i][j];
    }

    cache[i][j] = false;
    return false;
}



