class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const newLinkedListHeadPointer = new LinkedList(0); //dummy node, where we can access the head of our linked list
    let currentNode = newLinkedListHeadPointer; //so we can set the next node to the head node
    let carry = 0; //initialize 

    let nodeOne = linkedListOne; // going to be a head node
    let nodeTwo = linkedListTwo; // going to be a head node
    while (nodeOne !== null || nodeTwo !== null || carry !== 0) { //if we have a carry, node1 or node 2 - keep looping
        const valueOne = nodeOne !== null ? nodeOne.value : 0; //make sure we have a node to grab a value from even if its 0
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0; //make sure we have a node to grab a value from even if its 0
        const sumofValues = valueOne + valueTwo + carry; //we need to get the sum of every digit in ll1 and ll2 plus a carry if there is any

        const newValue = sumofValues % 10; //our new value in our new ll, mod 10 to handle the carry
        const newNode = new LinkedList(newValue);//
        currentNode.next = newNode;
        currentNode = newNode;

        carry = Math.floor(sumofValues / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    }

    return newLinkedListHeadPointer.next;
}
// Do not edit the lines below.
exports.LinkedList = LinkedList;
exports.sumOfLinkedLists = sumOfLinkedLists;
