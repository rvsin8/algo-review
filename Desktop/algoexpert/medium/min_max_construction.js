//Min Max Stack Construction
//Stacks

//my understandings 
//we are asked to implement a stack ds that has extra special properties via min max
//a stack is a simple ds, like stacking books - follows LIFO, opposite of a queue
//LIFO - last in first out
//LILO- last in last out is for queues
//a min max stack is not only a stack we can peek at and pop values off the stack - we can also access the min or max value in the stack at any time




//time complexity 
//O(1)

//space complexity
//O(1)

class MinMaxStack {
    constructor() {
        this.minMaxStack = [];
        this.stack = [];

        peek() {
            return this.stack[this.stack.length - 1];
        }

        pop() {
            this.minMaxStack.pop();
            return this.stack.pop();
        }

        push(number){
            const newMinMax = {min: number, max: number};
            if (this.minMaxStack.length) {
                const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1];
                newMinMax.min = Math.min(lastMinMax.min, number);
                newMinMax.max = Math.max(lastMinMax.max, number);


            }
            this.minMaxStack.push(newMinMax);
            this.stack.push(number);
        }

        getMin() {
            return this.minMaxStack[this.minMaxStack.length - 1].min;
        }

        getMax() {
            return this.minMaxStack[this.minMaxStack.length - 1].max;
        }
    }
}
