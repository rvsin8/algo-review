//Balanced Brackets
//Stacks

//my understanding

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