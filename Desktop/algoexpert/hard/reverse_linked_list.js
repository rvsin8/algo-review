//Reverse Linked List
//Linked Lists

//my understandings 


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
