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
//we go integer by integer we will look to the left and/or the right to see if there are dups
//we have to change the next attribute once we find a dup to a different value and then delete the dup integer it originally pointed too
//currentNode = head
//temp = currentNode.next.next
//currentNode.next = temp
//at idx 0 we have 1
//we have current node and we are looking for the next distinct node
//we want to change the next pointer that 1 is pointing to, to a distinct value
//our next distinct hits 3 and that is where the pointer will point to next
//now our current node points to 3 and our next distinct to 4
//we move to the next current node to 4
//we move our next distinct node which is also 4, again it is also 4 and then it is 5
//we then point first 4 to 5 now 
//and we do the same for 5 and have it point to one of the 6
//for 6 our next distinct node will be none

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
