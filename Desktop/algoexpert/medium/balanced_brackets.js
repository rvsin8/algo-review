//Balanced Brackets
//Stacks

//my understanding
//you are given a string of brackets and there are three types with two versions - open bracket and close bracket
//balance - the string needs to have as many opening brackets as many closed brackets and it needs to match
//you cant have a closing bracket before an opening bracket and you cannot overlap different types of brackets together


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