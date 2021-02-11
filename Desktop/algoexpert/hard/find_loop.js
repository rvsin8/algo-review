//Find Loop
//Linked Lists

//my understanding


//time complexity 


//space complexity 

function findLoop(head) {
    let first = head.next;
    let second = head.next.next;
    while (first !== second) {
        first = first.next;
        second = second.next.next;
    }
}