//Find Loop
//Linked Lists

//my understanding
//finding a loop in a linked list
//basically you are given a singly linked list - every node ot pointed to ONE node
//we want to find the node in which our loop is initiated 
//traverse the entire linked list, add each node to the hash table and see what node is already in the hash table that is hit again
//not the best solution bc it requires extra space

//solution with no space
//technique - traverse the list with two pointers
//you start with the pointer in the first node in the list and a second pointer there as well
//second pointer will go through every other node while the first pointer traverses through each one
//idx0 - F S
//idx1 - F
//idx2 - F S
//idx3 - F
//idx4 - S so on
//once our two pointers overlap - we ended one iteration of traversal
//F traveled x distance, visited x nodes
//S traveled 2x distance
//origin to the loop intiation is d
//initiation to overlap is p
//F --> X --> D + P
//S --> 2X --> 2D + 2P
//we want overlap and our target node is R



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