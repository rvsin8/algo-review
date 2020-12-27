//You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.
//
//You may assume the two numbers do not contain any leading zero, except the number 0 itself.
//
// 
//
//Example 1:
//
//
//Input: l1 = [2,4,3], l2 = [5,6,4]
//Output: [7,0,8]
//Explanation: 342 + 465 = 807.
//Example 2:
//
//Input: l1 = [0], l2 = [0]
//Output: [0]
//Example 3:
//
//Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
//Output: [8,9,9,9,0,0,0,1]
// 
//
//Constraints:
//
//The number of nodes in each linked list is in the range [1, 100].
//0 <= Node.val <= 9
//It is guaranteed that the list represents a number that does not have leading zeros.

//my understanding
//the num are in reverse order
//we have to do x + y (num 1 and num 2) + carry
//we will need to use the modulo operator - gives us the remainder after one num is divided by another //4+9=12 so 12 % 10 = 2 // 4+3=7 so 7 % 10 = 7
//to carry a num we can divide by 10 (instead of the modulo operator) and round down // 11/10 = 1.? --> 1 is now the carry
//if we have a carry with no more columns we will just add the carry to the beginning 


var addTwoNumber = function(l1, l2){
    let dummyHead = new ListNode(0); //make a new third linked list for the solution
    let p1 = l1; //pointer for the first head
    let p2 = l2; //pointer for the second head
    let current = dummyHead; //our third pointer for keeping track of our result
    let carry = 0; //our carry

    while (p1 !== null || p2 !== null){ //if either of our linked list has a next node we will keep iterating
        let x = (p1 !== null) ? p1.value : 0; //we need to check if our first pointer is on a node and if it is it will be the value of that node and if its not not we will make it 0 so we can add the other pointer it
        let y = (p2 !== null) ? p2.value : 0; //same logic as above

    }
};

