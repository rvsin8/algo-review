//Reverse Linked List
//Linked Lists

//my understandings
//popular interview question
//difficult 
//given a singly linked list, this sll consists of nodes and every node has a ".next" property 
//the tail points to the none / null value
//0 --> 1 --> 2 --> 3 --> 4 --> 5 and we want 5 --> 4 --> 3 --> 2 --> 1 --> 0

//time complexity
//O(n)

//space complexity 
//O(1)

function reverseLinkedList(head) {
    let previousNode = null;
    let currentNode = head;
    while (currentNode !== null) {
        const nextNode = currentNode.next;
        currentNode.next = previousNode;
        previousNode = currentNode;
        currentNode = nextNode;
    }
    return previousNode;
}


