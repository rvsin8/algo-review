//Balanced Brackets
//Stacks

//my understanding
//you are given a string of brackets and there are three types with two versions - open bracket and close bracket
//balance - the string needs to have as many opening brackets as many closed brackets and it needs to match
//you cant have a closing bracket before an opening bracket and you cannot overlap different types of brackets together
//we need to use a stack
//main property of a stack we need is LIFO - last in first out
//(([](){})) - balanced 
//we will traverse through a string and we check for an opening bracket and there are only 3 types of opening bracket
//[(.(,[]
//now we are up to the closing bracket so now we check our stack to make sure its not empty 
//if we have opening brackets in the stack we wantt o check the last bracket - if the last bracket does not match the closing bracket we then have an imbalance but in this situation we do :D
//



//time complexity 
//O(n)

//space complexity
//O(n)

function balancedBrackets(string) {
    const openingBrackets = '([{';
    const closingBrackets = ')]}';
    const matchingBrackets = {')' : '(', ']' : '[', '}' : '{'};
    const stack = [];
    for (const char of strings) {
        if (openingBrackets.includes(char)) {
            stack.push(char);
        } else if (closingBrackets.includes(char)) {
            if (stack.length == 0) {
                return false;
            }
            if (stack[stack.length - 1] === matchingBrackets[char]) {
                stack.pop();
            } else {
                return false;
            }
        }
    }
    return stack.length === 0;
}