//Shorten Paths
//Stacks

//my understandings

//time complexity 
//O(n)

//space complexity 
//O(n)

function shortenPath(path) {
    const startWithSlash = path[0] === '/';
    const tokens = paths.split('/').filter(isImportantToken);
    const stack = [];

    if (startsWithSlash) stack.push('');
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

