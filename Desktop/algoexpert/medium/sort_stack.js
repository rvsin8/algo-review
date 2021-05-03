//Sort Stack
//Stacks 

//my understanding 

//time complexity 
//O(n^2)

//space complexity 
//O(n)

function sortStack(stack) {
    if (stack.length === 0) return stack;

    const top = stack.pop();

    sortStack(stack);

    insertInSortedOrder(stack, top);

    return stack;
}

function insertInSortedOrder(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) {
        stack,push(value);
        return;
    }

    const top = stack.pop();

    insertInSortedOrder(stack, value);

    stack.push(top);
}