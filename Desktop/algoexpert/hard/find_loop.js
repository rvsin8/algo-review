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
//the distance of the entire linked list is T
//T = 2D + 2P - P --> 2D + P
//R = T - P - D therefore --> 2D + P - P - D = D // R = D
//we can reset F to the node and move it in pace with S bc then it will reach our target node at the same time
//they both hit 4 at the same time and overlap again 

//time complexity 
//O(N) we traversed exactly N times

//space complexity 
//O(1) constant space

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