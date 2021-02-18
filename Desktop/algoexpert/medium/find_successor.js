//Find Successor 
//Binary Trees

//my understanding 


//time complexity 

//space complexity 

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