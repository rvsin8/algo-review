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