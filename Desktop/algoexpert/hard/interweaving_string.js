//Interweaving Strings
//Recursion

//my understanding

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
}



