//Remove Nth Node From End
//Linked Lists

//my understanding 
//

//time complexity

//space complexity

function removeKthNodeFromEnd(head, k) {
    let counter = 1;
    let first = head;
    let second = head;
    while (counter <= k) {
        second = second.next;
        counter++;
    }

    if (second === null) {
        head.value = head.next.value;
        head.next = head.next.next;
        return;
    }
    
    while (second.unit !== null) {
        second = second.next;
        first = first.next;
    }
    first.next = first.next.nest;
}