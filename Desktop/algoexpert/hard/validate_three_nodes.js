//Validate Three Nodes
//Binary Search Trees

//my understanding

//time complexity 

//space complexity

function validateThreeNodes(nodeOne, nodeTwo, nodeThree) {
    if (isDescendant(nodeTwo, nodeOne)) return isDescendant(nodeThree, nodeTwo);
    if (isDescendant(nodeTwo, nodeThree)) return isDescendant(nodeOne, nodeTwo);

    return false;
}

function isDescendant(node, target) {
    if (node === null) return false;
    if (node === target) return true;

    return target.value < node.value ? isDescendant(node.left, target) : isDescendant(node.right, target);
}