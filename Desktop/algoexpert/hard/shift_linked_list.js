//Shift Linked List
//Linked List

//my understanding


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
}