//Validate Three Nodes
//Binary Search Trees

//my understanding
//we are given three inputs and these inputs are individual nodes contained in the same binary search tree
//these nodes are labeled node one, node two and node three 
//what we need to try to find out is if node 2 is btw node 1 and 3, are they ancestors of node 2
//if one is the descendant we need to check if the other is an ancestor
//return true if it is true
//these nodes will be unique and not null
//we have a bst which means that these nodes have a value, right, left property 
//a bst i ony valid if its left child is strictly less than its right child
//a descendant is a node that is in the ame branch as another node but is below it
//an ancestor is in the same branch but above it 

//solve this
//use the bst way to search for values bc it is faster
//

//time complexity 

//space complexity


function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);
    if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);

    return false;
}

function isDescendant(node, target) {
    if (node !== null && node !== target) {
        node = target.value < node.value ? node.left : node.right;\
    }
    return node === target;
}