//Shorten Paths
//Stacks

//my understandings
//a lot of edge cases
//wants us to write a function that takes a nonempty string and represents a valid shell path
//a path is notation that represents the location of a file / directory in a file system it can be absolute or relative
//the root directory is represented by a forward "/" 
//relative path is without the "/" in the beginning 
//"/" that comes represents the directory separator 
//

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

