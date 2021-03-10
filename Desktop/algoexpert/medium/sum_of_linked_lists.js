//Sum of Linked Lists
//Linked Lists

//my understandings 

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