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

function removeKthNodeFromEnd(head, k) { //takes in the head and kth value we want to remove from end
    let counter = 1; //we need to have a counter value to see how much we have traversed
    let first = head; //first is going to point to head
    let second = head; //as well as second
    while (counter <= k) { //while counter is less than or equal to k, make sure k is inclusively for off by 1 errors
        second = second.next; //we want our second pointer to point to second.next
        counter++; //increment the counter
    }

    if (second === null) { //if second pointer is null
        head.value = head.next.value; //your first pointer is pointing to the head node. so update its value and next pointer
        head.next = head.next.next; //head.value is now updated to the following node
        return;
    }
    
    while (second.unit !== null) {//if the second pointer does not hit null
        second = second.next; //increment second pointer same pace
        first = first.next; //increment first pointer same pace
    }
    first.next = first.next.next; //when we break out the while loop, everything is shifted by one //removes the node we wants away // first is pointing to the node right before the node we want to remove //first.next = NODE TO REMOVE //first.next.next = NODE TO REMOVE.next
}