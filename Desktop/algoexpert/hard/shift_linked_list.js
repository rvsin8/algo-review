//Shift Linked List
//Linked List

//my understanding
//classic linked list questions
//tricky when you don't want to overwrite a certain pointer or lose references
//we are given a linked list, head node is 0 and tail node is 5 and it is single linked list
//integer k represents the number of positions you want to shift the integers by position
//if k is neg you have to move them backwards
//forget about edge cases first, and solve it for the most basic case first

//my solution
//O --> 1 --> 2 --> 3 --> 4 --> 5 k=2
//4 --> 5 --> 0 --> 1 --> 2 --> 3
//what exactly what we just did entails ? we made 3 into a tail node and 5 a regular node with a pointer
//we care about four nodes - tail node, middle node that will be the new tail node, original head of the node and the new head node
//calculate the length of the linked list via a counter and once we have it - 6 - we do 6 - k which is 2 = 4, our new tail will be in pos 4
//position --> pnt = length - k 
//we are  not storing extra data
//when k is 0, we return the linked list
//when k is very large like 30 - we can use a module operator - 30 % 6 = 0 we do nothing 
//when k is a negative number like -2 - we move backwards - pnt = 0 + k is the new formula and we will alsop use the module operator 

//time complexity 
//O(n) n is the length of the linked list

//space complexity 
//O(1) no extra storage, everything is in place

function shiftLinkedList(head, k) {
    let listLength = 1; //our counter
    let listTail = head; //our current node
    while (listTail.next !== null) { //aslong as the list tail is not none
        listTail = listTail.next; //our list tail is next
        listLength++; //keep incrementing 
    }

    const offset = Math.abs(k) % listLength; //calculate the offset where it is the abs value of k module the list length
    if (offset === 0) return head; //if offset is 0 we return the head

    const newTailPosition = k > 0 ? listLength - offset : offset; //positive or negative integer
    let newTail = head; //update 
    for (let i = 1; i < newTailPosition; i++) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;
    listTail.next = head;
    return newHead;
}

//review this cause wtf