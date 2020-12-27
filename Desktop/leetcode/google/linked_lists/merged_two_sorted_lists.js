//Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.
//
// 
//
//Example 1:
//
//
//Input: l1 = [1,2,4], l2 = [1,3,4]
//Output: [1,1,2,3,4,4]
//Example 2:
//
//Input: l1 = [], l2 = []
//Output: []
//Example 3:
//
//Input: l1 = [], l2 = [0]
//Output: [0]
// 
//
//Constraints:
//
//The number of nodes in both lists is in the range [0, 50].
//-100 <= Node.val <= 100
//Both l1 and l2 are sorted in non-decreasing order.

//my understanding
//we are going to link the two lists together by switching the references to the next smallest num
//create a brand new head starting at -1, then we look at the next two items in the linked list and choose the smaller num [1,2,4] and [3,8,9,10] so we choose 1 
//now we look at the next two and pick a reference, 2 or 3 ? 2 
//whats smaller 4 or 3 ? 3 so we break the link to 3
//4 or 8, 4 so we break the reference to 4
//once you hit null you break out the loop and whatever linked list contains null will now replace null with the second linked list
//we want to start with the head + 1 cause we don't want to reference -1


class ListNode { //is a node we can use
    constructor(val = null, next = null){
        this.val = val;
        this.next = next;
    }
}

var mergeTwoLists = function(l1, l2){
    let dummy = new ListNode(-1); //our dummy node where we begin, we can set the val to whatever so i choose -1
    let head = dummy; //reference to dummy will keep changing, in the end we will return head.next which is where we will begin

    while (l1 !== null && l2 !== null) { //iterate through the lists, pointer
        if (l1.val <= l2.val) { //if l1 value is less than l2 value
            dummy.next = l1; //we set our pointer to that val
            l1 = l1.next; //we than look at the next node

        } else { //if l2.val <= val
            dummy.next = l2; //we set our pointer to l2 val
            l2 = l2.next; //we then look at the next node in that list
        } 
    }

};