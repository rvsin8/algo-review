//Sum of Linked Lists
//Linked Lists

//my understandings 
//we are given two linked lists that represent positive values and add them together
//out output will be a new linked list of the sum 
//range of integers 0-9
//the first digit of our linked list the least significant and the last digit is the most so 2 --> 4 --> 7 --> 1 is 1742
//9 --> 4 --> 5 is 549
//output linked list 549 + 1742 = 2291 which will look like 1 --> 9 --> 2 --> 2
//it needs to be a brand new linked list and that we are not modifying any linked list we have already 
//every linked list will have a next and value attribute 
//next attribute points to another linked list node or none/null
//value attribute will be between 0-9 and always positive 
//this is an O(m + n) m is the first ll and n is the second ll and maybe have the same space complexity by keeping tracking of all of the digits

//my solution
//


//time complexity
//O(max(n,m))

//space complexity 
//O(max(n,m))

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const newLinkedListHeadPointer = new linkedListOne(0);
    let currentNode = newLinkedListHeadPointer;
    let carry = 0;

    let nodeOne = linkedListOne;
    let nodeTwo = linkedListTwo;
    while (nodeOne !== null || nodeTwo !== null || carry !== 0) {
        const valueOne = nodeOne !== null ? nodeOne.value : 0;
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0;
        const sumofValues = valueOne + valueTwo + carry;

        const newValue = sumofValues % 10;
        const newNode = new LinkedList(newValue);
        currentNode.next = newNode;
        currentNode = newNode;

        carry = Math.floor(sumofValues / 10);
        nodeOne = nodeOne !== null ? nodeOne.next : null;
        nodeTwo = nodeTwo !== null ? nodeTwo.next : null;
    }

    return newLinkedListHeadPointer.next;
}