//Sort Stack
//Stacks 

//my understanding 
//in this question we are given one input which will be an array filled with integers
//we must treat this array like a stack so we are only allowed to append element into the array or pop them off the array
//you can only do these functions towards the end of the array aka the top of the stack
//in place
//we cant use sorting algorithms bc we cannot access indices 
//we need to sort it in ascending order
//we need to pop each element to know what ele needs to be in what order
//[-5,2,-2,4,3,1] --> [-5,-2,1,2,3,4]
//we need to pop everything off and readd them in order
//so when all are popped off of the array, we begin adding the ele back
//we add back -5
//then we look at 2, is it greater than -5 ? yes so we add it back to the stack as well
//now we are at -2, and it is not greater than the 2 we added so we pop off the 2 again
//is the -2 greater to -5, yes so we can add it back now in -[-5,-2]
//now we look at the 2 again and it is greater than -2 so we add it as well --> [-5,-2,2]
//do the same with 4 --> [-5,-2,2,4]
//now we are at 3 --> [-5,-2,2,3]
//4 again --> [-5,-2,2,3,4]
//now we are at 1 so we have to redo all of this --> [-5,-2,1]
//repeat this until we get --> [-5,-2,1,2,3,4]
//we will use two recursive functions - sort() and insert()
//sort() will find the correct place for ele
//call sort first and pass in our input stack and change in place
//we do this until all the elements are popped off
//then we use the insert function
//we insert 5 and 2 like before
//we do this until we inserted the sorted stack back on

//time complexity 
//O(n^2) not an efficiently algo bc we have to keep popping in and out
//we remove all the ele which is O(n)
//insertion may cause us O(n)

//space complexity 
//O(n) we have to have a recursive call stack so we have a lot of function that are being stored


function sortStack(stack) {
    if (stack.length === 0) return stack; //if the length of the stack is 0, then return the stack

    const top = stack.pop(); //treat the end of the array like the top of the stack

    sortStack(stack); //sorting the remainder of the stack

    insertInSortedOrder(stack, top); //sort in order the ele we just popped off

    return stack; //return our stack
}

function insertInSortedOrder(stack, value) {
    if (stack.length === 0 || stack[stack.length - 1] <= value) { //this gives us the top of the stack, if it greater than  our value we
        stack,push(value);//add it to our stack again
        return;
    }

    const top = stack.pop(); //if not pop off the top ele 

    insertInSortedOrder(stack, value); //pass the stack and same value

    stack.push(top); //append the top ele
}