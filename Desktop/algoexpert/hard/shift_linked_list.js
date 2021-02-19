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
//

//time complexity 
//O(n)

//space complexity 
//O(1)

function shifLinkedList(head, k) {
    let listLength = 1;
    let listTail = head;
    while (listTail.next !== null) {
        listTail = listTail.next;
        listLength++;
    }

    const offset = Math.abs(k) % listLength;
    if (offset === 0) return head;

    const newTailPosition = k > 0 ? listLength - offset : offset;
    let newTail = head;
    for (let i = 1; i < newTailPosition; i++) {
        newTail = newTail.next;
    }

    const newHead = newTail.next;
    newTail.next = null;
    listTail.next = head;
    return newHead;
}