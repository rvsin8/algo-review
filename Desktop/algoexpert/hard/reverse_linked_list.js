//Reverse Linked List
//Linked Lists

//my understandings
//popular interview question
//difficult 
//given a singly linked list, this sll consists of nodes and every node has a ".next" property 
//the tail points to the none / null value
//0 --> 1 --> 2 --> 3 --> 4 --> 5 and we want 5 --> 4 --> 3 --> 2 --> 1 --> 0
//put aside the edge cases like the head and tail, try to understand how you can change or reverse the pointer for one standard node 
//we can look at 2, its in the middle, has a pointer behind and after it
//we will call 2 "p" for pointer
//if we want to reverse the node that means we want the pointer pointing to 3 to point to 1 instead via ".next" property
//p.next should equal the node that came before it
//when we are at 2 we have no access to 1
//we need a variable that will have a reference to the 1
//we will have p2 at 2 and p1 at 1
//p2.next = p1 - will lead to 2 --> 1
//next is the 3 node but we lost our reference to the 3 node from the 2 node bc our p2.next does not equal 3 anymore
//declare a p3 that is at 3
//we shift all the pointers to the right
//p1 = p2 // p2 = p3 // p3 = p2.next or p3.next
//we must do these things in order^
//we need to reverse the head, aslong as p2 is not null we will continue to do these operations until it is null
// p3 = p2.next then we do p2.next = p1 then p1 = p2 and then ps = p3 to handle the head of the linked list
//when p3 is the null value we are at the end of the list 
//p1 is now 5 which is the new head of the list
//this is mad confusing 

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


