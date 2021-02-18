//Find Successor 
//Binary Trees

//my understanding 


//time complexity 

//space complexity 

function findSuccessor(tree, node) {
    if (node.right != null) return getLeftmostChild(node.right);

    return getRightmostParent(node);
}

