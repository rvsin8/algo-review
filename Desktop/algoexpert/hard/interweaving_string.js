//Interweaving Strings
//Recursion

//my understanding
//we get three strings and we need to write a function whether the first two strings can be interwoven to be the third string
//edge case --> cancatonate which is also interweaving 
//grab the first and second string and put them one top of each other
//declare variables, two pointers that iterate through string 1 and string 2 to see if any letter is in the third string 
//figure out which string starts the third string off



//time complexity
//O(nm)

//space complexity 
//O(nm)

function interweavingStrings(one, two, three) {
    if (three.length !== one.length + two.length) {
        return false;
    }

    const cache = new Array(one.length + 1).fill(0).map(_ => new Array(two.length + 1).fill(null));
    return areInterwoven(one, two, three, 0, 0, cache);
}

function areInterwoven(one, two, three, i, j, cache) {
    if (cache[i][j] !== null) return cache[i][j];

    const k = i + j;
    if (k === three.length) return true;

    if (i < one.length && one[i] === three[k]) {
        cache[i][j] = areInterwoven(one, two, three, i + 1, j, cache);
        if (cache[i][j]) return true;
    }

    if (j < two.length && two[j] === three[k]) {
        cache[i][j] = areInterwoven(one, two, three, i, j+1, cache);
        return cache[i][j];
    }

    cache[i][j] = false;
    return false;
}



