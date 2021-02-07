//Remove Nth Node From End
//Linked Lists

//my understanding 
//we are given a head node that will store integer values
//given an integer value, and remove the nth node from the end of the lsit
//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 6 -> 7 -> 8 -> 9, 4
//0 -> 1 -> 2 -> 3 -> 4 -> 5 -> 7 -> 8 -> 9 
//since we have a single linked list its not as easy as a double linked list
//so we traverse the linked list with 2 pointers and find the solution
//first and second pointers
//have both pointers point at the head of the linked list
//have our second pointer traverse the linked list before the first pointer
//have it traverse 4 node, so the second pointer is now 4 nodes ahead si 4 is n
//we can move both pointers at once as we traverse, same pace until our second pointer goes past the end aka null value
//as it moves second pointer hits null and first pointer hits 6
//bc our second pointer was n nodes ahead of our first pointer, now as we move together, the sec pointer n nodes ahead and when it hits the null vale we know the first pointer is hitting the value we want to be at and remove
//we have to keep track of the node before the one we want to disregard like 5
//we just want the arrow pointing from 5 to 6 to point at 7 instead so we need to keep track of 5
//what if the node we want gone is the first int/node
//once our sec pointer is immediately at null, we are done and we remove the head node of the list

//time complexity
//O(n) - where n is the length of the linked list

//space complexity
//0(1) - constant space bc all we are doing is moving the pointers, keeping track of the nodes at the pointers, we are not storing much else

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