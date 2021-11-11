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
//if we have opening brackets in the stack we want o check the last bracket - if the last bracket does not match the closing bracket we then have an imbalance but in this situation we do :D
//[(.(,(] --> now we are up to a closing ')'
//[(,(] --> now we are at another closing ')'
//so on until the stack is empty bc if it isnt empty then it is unbalanced 



//time complexity 
//O(n) - where n is the length of the string

//space complexity
//O(n) - storing brackets

function balancedBrackets(string) {
    const openingBrackets = '([{'; //save the opening brackets
    const closingBrackets = ')]}'; //save the closing brackets
    const matchingBrackets = {')' : '(', ']' : '[', '}' : '{'}; //match up the brackets
    const stack = []; //store brackets in a stack
    for (const char of string) { //the bracket is in the string 
        if (openingBrackets.includes(char)) { //if it is an opening bracket
            stack.push(char); //push it to the stack
        } else if (closingBrackets.includes(char)) { //if it is a closing bracket
            if (stack.length == 0) { //if the stack is not empty by the end of it then its false 
                return false;
            }
            if (stack[stack.length - 1] === matchingBrackets[char]) { //if the last bracket is equal to the last matching bracket then pop them out the stack
                stack.pop();
            } else {
                return false; //if theres no match then its false
            }
        }
    }
    return stack.length === 0; //we want to check if the stack is empty
}