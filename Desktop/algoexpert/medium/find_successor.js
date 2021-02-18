//Find Successor 
//Binary Trees

//my understanding 
//we are given an input binary tree and an input, what we want to do is to find the success or that input node
//the successor is the next node to be visited 
//for 5 it will be 1
//we look at the left then visit the current node and look to the right
//1 --> 2 --> 4 --> 6 --> 4 --> 2 --> 5 --> 2 --> 1 --> 3
//[6, 4, 2, 5, 1, 3] is our in order traversal 

//time complexity 
//O(h)

//space complexity 
//O(1)

function findSuccessor(tree, node) {
    if (node.right != null) return getLeftmostChild(node.right);

    return getRightmostParent(node);
}

function getLeftmostChild(node) {
    let currentNode = node;
    while (currentNode.left !== null) {
        currentNode = currentNode.left;
    }
    return currentNode;
}

function getRightmostParent(node) {
    let currentNode = node;
    while (currentNode.parent !== null && currentNode.parent.right === currentNode) {
        currentNode = currentNode.parent;
    }

    return currentNode.parent;
}