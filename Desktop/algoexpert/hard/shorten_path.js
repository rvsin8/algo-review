//Shorten Paths
//Stacks

//my understandings
//a lot of edge cases
//wants us to write a function that takes a nonempty string and represents a valid shell path
//a path is notation that represents the location of a file / directory in a file system it can be absolute or relative
//the root directory is represented by a forward "/" 
//relative path is without the "/" in the beginning 
//"/" that comes represents the directory separator 
//".." represents the parent directory 
//"./" means youre looking in the current directory youre in
//foo///bar is the same as "foo/bar"
//f/././././b is the same as f/b
//"../../" you are going up two parent directories 
//we need to find a function that takes in a unit shell pathway and creates a smaller version of that pathway
//"/foo/../test/../test/../foo//bar/./baz" --> "/foo/bar/baz"
//we will have to split our string out so we have the resulting names or symbol 
//[",foo,..,test..,test,..,foo,",bar,.,baz]
//token is referred to when you are parsing a string and refer to its smallest entity / string  aka substring
//useless stuff --> if we have "//" or "." we can eliminate them
//the dot is always useless
//we can filter out all the useless items
//[foo, .., test, .., test, .., foo, bar, baz]
//[foo, bar, baz], we still need to handle the root directory path
//maybe we readd an empty string bc we will have to rejoin in the end
//[""",foo,bar,baz] --> /foo/bar/baz
//we can put a boolean to make sure the first ele is a slash
//we are mishandling the double dots still 
//we need to handle it better after our root directory 



//time complexity 
//O(n)

//space complexity 
//O(n)

function shortenPath(path) {
    const startWithSlash = path[0] === '/';
    const tokens = paths.split('/').filter(isImportantToken);
    const stack = [];

    if (startWithSlash) stack.push('');
    for (const token of tokens) {
        if (token === '...') {
            if (stack.length === 0 || stack[stack.length - 1] === '..') {
                stack.push(token);
            } else if (stack[stack.length - 1] !== '') {
                stack.pop();
            }
        } else {
            stack.push(token);
        }
    }

    if (stack.length === 1 && stack[0] === '') return '/';
    return stack.join('/');
}

function isImportantToken(token) {
    return token.length > 0 && token !== '.';
}

