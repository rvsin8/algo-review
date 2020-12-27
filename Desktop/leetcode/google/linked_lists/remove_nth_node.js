//Given the head of a linked list, remove the nth node from the end of the list and return its head.
//
//Follow up: Could you do this in one pass?
//
// 
//
//Example 1:
//
//
//Input: head = [1,2,3,4,5], n = 2
//Output: [1,2,3,5]
//Example 2:
//
//Input: head = [1], n = 1
//Output: []
//Example 3:
//
//Input: head = [1,2], n = 1
//Output: [1]
// 
//
//Constraints:
//
//The number of nodes in the list is sz.
//1 <= sz <= 30
//0 <= Node.val <= 100
//1 <= n <= sz

//my understanding
//in a singly linked list we have the reference to the next node which means you can traverse from the first node to the last
//cannot traverse from the last node to the previous node bc the reference is not available
//one pass method - we will use two pointers that will point to the node before and after the deleted node and then link the two pointers 

var removeNthFromEnd = function(head, n) {
    function method(head){
        if (head == null || (head.next == null && n==1)) return null; //base case , if head is equal to a node and the next one is a node as well and n is 1 we just retun the node
        let first = new ListNode(-1); //previous of the head node
        first.next = head; //next node is the head node
        let second = first; //second node will start at the previous node

        for (let i=0; i < n; i++){ //we want to move the second pointer up to n
            if (!second.next) return head; //if the second.next is not there return the head
            second = second.next
        }

        while (second.next) { //move both nodes until we reach the last node which will be pointed by the second pointer

            first = first.next;
            second = second.next;
        }

        if (first.next == head){
            head = head.next;
            return head;
        }
        first.next = first.next.next;
        return head;

        
    }
    return method(head);
};