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
//we will create the output before we figure out what the input is 
//we add numbers via ones columns, then tens then thousands and etc
//2 + 9 % 10 = 1 and a carry of 1 to the next column we mod it so we can carry it over
//we will keep track of the carry
//have a linked list node like dummy = Node(0) to point to the head of our linked list 
//currentNode = dummy
//we need to keep track of the nodes we have added
//we will loop through both linked lists via two pointers
//value = (2+9) % 10 = 1
//carry = (2+9) % 10 = 1
//dummy.next will lead us to the next head
//value --> 4 + 4 % 10 = 8 + 1 = 9
//carry --> 4 + 4 % 10 = 0
//update this --> dummy = Node(0) currentNode = Node(9) and carry = 0
//value = 7 + 5 % 10 = 2 
//carry = 7 + 5 % 10 = 1
//dummy = Node(0) currentNode = Node(2) and carry = 1
//no more linked list 2 we hit null 
//we assume the rest of linked list 2 is 0
//value = 1 + 0 + 1 = 2 % 10 = 2
//carry = 1 + 0 % 10 = 0
//dummy = Node(0) currentNode = Node(2) and carry = 0
//we need to return this linked list from the dummy node 
//LL1: 9
//LL2: 7


//time complexity
//O(max(n,m)) bc the longest linked list dictates this where n is linked list 1 and m is linked list 2

//space complexity 
//O(max(n,m)) 

function sumOfLinkedLists(linkedListOne, linkedListTwo) {
    const newLinkedListHeadPointer = new linkedListOne(0); //dummy node, where we can access the head of our linked list
    let currentNode = newLinkedListHeadPointer; //so we can set the next node to the head node
    let carry = 0; //initialize 

    let nodeOne = linkedListOne; // going to be a head node
    let nodeTwo = linkedListTwo; // going to be a head node
    while (nodeOne !== null || nodeTwo !== null || carry !== 0) { //if we have a carry, node1 or node 2 - keep looping
        const valueOne = nodeOne !== null ? nodeOne.value : 0; //make sure we have a node to grab a value from even if its 0
        const valueTwo = nodeTwo !== null ? nodeTwo.value : 0; //make sure we have a node to grab a value from even if its 0
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