//Sort Stack
//Stacks 

//my understanding 
//in this question we are given one input which will be an array filled with integers
//we must treat this array like a stack so we are only allowed to append element into the array or pop them off the array
//you can only do these functions towards the end of the array aka the top of the stack
//in place
//we cant use sorting algorithms bc we cannot access indices 

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