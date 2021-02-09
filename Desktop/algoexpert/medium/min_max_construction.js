//Min Max Stack Construction
//Stacks

//my understandings 
//we are asked to implement a stack ds that has extra special properties via min max
//a stack is a simple ds, like stacking books - follows LIFO, opposite of a queue
//LIFO - last in first out
//LILO- last in last out is for queues
//a min max stack is not only a stack we can peek at and pop values off the stack - we can also access the min or max value in the stack at any time
//we want to be able peek, pop, push and get min or max values in constant time and space
//5, 7, 2
//min - 5 5 2
//max - 5 7 7 
//peek - 5 7 2
//we have to store all our numbers via an array and we can pop and peek and get the min and max value from that array
//

//time complexity 
//O(1) 

//space complexity
//O(1)
//overall
//O(N) all we are doing is storing 2 values a min and max so we are not using extra space

class MinMaxStack {
    constructor() {
        this.minMaxStack = []; //list that holds our min and max value at any given time
        this.stack = []; //holds our stack

        peek() {
            return this.stack[this.stack.length - 1]; //return the value at the end of the list
        }

        pop() {
            this.minMaxStack.pop(); //pop the value off of min max value as well we want this to be in sync with our stack
            return this.stack.pop(); 
        }

        push(number){
            const newMinMax = {min: number, max: number}; //decale min max to a num
            if (this.minMaxStack.length) { //if the length of our min max stack is truthy - as in we have values in our stack
                const lastMinMax = this.minMaxStack[this.minMaxStack.length - 1]; //grab the last min max value
                newMinMax.min = Math.min(lastMinMax.min, number); //
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
