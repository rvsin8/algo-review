//Sum of Linked Lists
//Linked Lists

//my understandings 
//we are given two linked lists that represent positive values and add them together
//out output will be a new linked list of the sum 
//range of integers 0-9
//the first digit of our linked list the least significant and the last digit is the most so 2 --> 4 --> 7 --> 1 is 1742
//9 --> 4 --> 5 is 549
//output linked list 549 + 1742 = 2291 which will look like 1 --> 9 --> 2 --> 2


//time complexity
//O(max(n,m))

//space complexity 
//O(max(n,m))

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const newLinkedListHeadPointer = new linkedListOne(0);
    let currentNode = newLinkedListHeadPointer;
    let carry = 0;

    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;
    while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
        const valueOne = nodeOne !== null ? nodeOne.value : 0;
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
        const sumofValues = valueOne + valueTwo + carry;

        const newValue = sumofValues % 10;
        const newNode = new LinkedList(newValue);
        currentNode.next = newNode;
        currentNode = newNode;

        carry = Math.floor(sumofValues / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    }

    return newLinkedListHeadPointer.next;
}