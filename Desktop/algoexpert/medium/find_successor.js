//Find Successor 
//Binary Trees

//my understanding 
//we are given an input binary tree and an input, what we want to do is to find the success or that input node
//the successor is the next node to be visited 
//for 5 it will be 1
//we look at the left then visit the current node and look to the right
//1 --> 2 --> 4 --> 6 --> 4 --> 2 --> 5 --> 2 --> 1 --> 3
//[6, 4, 2, 5, 1, 3] is our in order traversal 
//every node we are given we will have the value, left child, right child and parent
//root node has no parent
//having no successor can happen for example is 3 so we return none/null

//solution 
//we can start from the root, traverse through the tree and store those values
//6,4,2,5,1,3 the node is 5 and the answers of its successor is 1
//O(n) time and space complexity but there is better
//do we need to traverse the entire tree and make any storages ?
//on all our nodes we have access to the parent node
//left visit right, so if a node has a right subtree and that means its successor must be in the right subtree
//the node successor is going to be the furthest left node in this nodes right subtree
//ancestor are all parent nodes of a node
//whenever we are the right child of a node, we know it cannot be the successor
//what node allowed us to visit that right node, so we look at the parent and that will be the successor (makes more sense in the example)
//we can solve this ins O(h) where h is the height of the tree and it is better than O(n) review in video

//time complexity 
//O(h)

//space complexity 
//O(1)

function findSuccessor(tree, node) { //tree aka root node
    if (node.right != null) return getLeftmostChild(node.right); //if a node has a right child, return get left most child

    return getRightmostParent(node); //if we do not have a right child, we will get right most child
}

function getLeftmostChild(node) {
    let currentNode = node; //
    while (currentNode.left !== null) { //while current node.left is not null
        currentNode = currentNode.left; //we will go to the left child
    }
    return currentNode;
}

function getRightmostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === currentNode) { //if we have a parent and if we came from the right child of the parent node
        currentNode = currentNode.parent; //set current node to its parent
    }

    return currentNode.parent; //when condition is false
}