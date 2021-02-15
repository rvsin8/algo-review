//Remove Duplicates From Linked List
//Linked Lists

//my understanding
//we will be given a linked list
//we want to remove the duplicate values and return the linked lists with all those integers removed
//1 -> 1 --> 3 --> 4 --> 4 --> 5 --> 6 --> 6
//the list will always be sorted
//these nodes will be represented by objects
//our nodes will have a value and a next attribute (go to another node or null/none)

//solution
//all our dups will be grouped together since it is in ascending order
//we go integer by integer we will look to the left an the right to see if there are dups


//time complexity 
//O(n)


//space complexity
//O(1)


function removeDuplicatesFromLinkedList(linkedList) {
    let currentNode = linkedList;
    while (currentNode !== null) {
        let nextDistinctNode = currentNode.next;
        while (nextDistinctNode !== null && nextDistinctNode.value === currentNode.value) {
            nextDistinctNode = nextDistinctNode.next;
        }

        currentNode.next = nextDistinctNode;
        currentNode = nextDistinctNode;
    }

    return linkedList;
}
