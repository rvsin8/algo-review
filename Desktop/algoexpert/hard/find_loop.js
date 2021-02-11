//Find Loop
//Linked Lists

//my understanding


//time complexity 
//O(n)

//space complexity 
//O(1)

function findLoop(head) {
    let first = head.next;
    let second = head.next.next;
    while (first !== second) {
        first = first.next;
        second = second.next.next;
    }
    first = head;
    while (first !== second) {
        first = first.next;
        second = seconf.next;
    }
    return first;
}