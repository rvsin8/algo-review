// This is an input class. Do not edit.
class LinkedList {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}
function findLoop(head) {
    let first = head.next; //start in the head, iterate through each one
    let second = head.next.next; //start in head, iterate through every other
    while (first !== second) { //while first does not equal second
        first = first.next; //keep traversing
        second = second.next.next; //keep traversing 
    } //once we leave the loop
    first = head; //bring the first pointer to the head
    while (first !== second) {
        first = first.next; //traverse every 
        second = second.next; //traverse every at same pace at the first node
    }
    return first; //return once they overlap at the first pointer
}

//already done