//Sort Stack
//Stacks 

//my understanding 

//time complexity 
//O(n^2)

//space complexity 
//O(n)

function sortStack(stack) {
    if (stack.length === 0) return stack;

    const stop = stack.pop();

    sortStack(stack);

    insertInSortedOrder(stack, top);
}
