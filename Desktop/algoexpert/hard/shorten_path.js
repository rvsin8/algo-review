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
//when you have a bunch of double dots that want to go back up through the root directory they are meaningless 
//we need to handle the case where we have the double dots going past the root directory 
//we need to handle the cases where the double dots want to go back to the root directory and in those cases we want to do absolutely nothing to the double dots
//we need the root directory to get rid of useless double dots 
//another edge case - when we have a relative path which starts with double dots 
//  ../../foo --> [..,..,foo] --> ../../foo  we will add the double dots



//time complexity 
//O(n) splitting the string is an O(N) operation and then filtering the tokens is also an O(N) operation bc we are iterating through N ele and its constant time operations bc we are checking 

//space complexity 
//O(n) where n is the length of the input string, we are creating a list of tokens which will be the same length ass the input string and in the end our shorten path cannot be more than N numbers

function shortenPath(path) {
    const startWithSlash = path[0] === '/'; //declare the variable that shows us whether we start with a slash or not
    const tokens = paths.split('/').filter(isImportantToken); //split up our tokens and filter the resulting tokens by removing the unimportant ones
    const stack = []; //create a stack

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

