//Remove Nth Node From End
//Linked Lists

//my understanding 
//we are given a head node that will store integer values
//given an integer value, and remove the nth node from the end of the lsit
//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9, 4
//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9 

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